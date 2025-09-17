// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// "Banco" em memória
let jogadoras = []; // { id, nome, email, senha, telefone, dataNascimento, posicao(optional) }
let inscricoes = []; // { id, jogadoraId, campeonato, posicao, nivel, disponibilidade, time, observacoes, createdAt }
let proximIdJogadora = 1;
let proximIdInscricao = 1;

// ---------- Helpers de validação ----------
function validaEmailBasico(email) {
  return (
    typeof email === "string" &&
    email.includes("@") &&
    email.indexOf(" ") === -1
  );
}
function retornaSemSenha(usuario) {
  const { senha, ...rest } = usuario;
  return rest;
}

// ---------- Rotas ----------

// Health check
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Servidor rodando" });
});

/**
 * Cadastro de jogadora
 * POST /api/jogadoras
 * body: { nome, email, senha, confirmPassword, telefone, dataNascimento, posicao? }
 */
app.post("/api/jogadoras", (req, res) => {
  const {
    nome,
    email,
    senha,
    confirmarSenha,
    telefone,
    dataNascimento,
    posicao,
  } = req.body;

  const errors = {};
  if (!nome || typeof nome !== "string" || nome.trim().length < 3) {
    errors.nome = "Nome é obrigatório e deve ter ao menos 3 caracteres.";
  }
  if (!email || !validaEmailBasico(email)) {
    errors.email = "Email inválido.";
  }
  if (!senha || senha.length < 8) {
    errors.senha = "Senha obrigatória (mínimo 8 caracteres).";
  }
  if (senha !== confirmarSenha) {
    errors.confirmarSenha = "Confirmação de senha não confere.";
  }
  if (!telefone || typeof telefone !== "string") {
    errors.telefone = "Telefone é obrigatório.";
  }
  if (!dataNascimento) {
    errors.dataNascimento = "Data de nascimento é obrigatória.";
  }

  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  const idade = hoje.getFullYear() - nascimento.getFullYear();

  if (idade < 16) {
    errors.dataNascimento = "Idade mínima para cadastro é 16 anos.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // checar email duplicado
  const existente = jogadoras.find(
    (j) => j.email.toLowerCase() === email.toLowerCase()
  );
  if (existente) {
    return res
      .status(409)
      .json({ success: false, error: "Email já cadastrado." });
  }

  const nova = {
    id: proximIdJogadora++,
    nome: nome.trim(),
    email: email.toLowerCase(),
    senha, // Nota: em produção, nunca salve senha em texto plano — usar bcrypt
    telefone: telefone.trim(),
    dataNascimento,
    posicao: posicao || null,
    criadoEm: new Date().toISOString(),
  };

  jogadoras.push(nova);
  return res.status(201).json({
    success: true,
    message: "Jogadora cadastrada.",
    jogadora: retornaSemSenha(nova),
  });
});

/**
 * Login simples
 * POST /api/login
 * body: { email, senha }
 */
app.post("/api/login", (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res
      .status(400)
      .json({ success: false, error: "Email e senha são obrigatórios." });
  }

  const usuario = jogadoras.find(
    (j) => j.email === email.toLowerCase() && j.senha === senha
  );
  if (!usuario) {
    return res
      .status(401)
      .json({ success: false, error: "Credenciais inválidas." });
  }

  // Simples resposta — no futuro retornar JWT
  return res.json({
    success: true,
    message: "Login realizado.",
    jogadora: retornaSemSenha(usuario),
  });
});

/**
 * Listar todas as jogadoras (sem senha)
 * GET /api/jogadoras
 */
app.get("/api/jogadoras", (req, res) => {
  return res.json(jogadoras.map(retornaSemSenha));
});

/**
 * Criar inscrição em campeonato
 * POST /api/inscricoes
 * body: { jogadoraId, campeonato, posicao, nivel, disponibilidade, time?, observacoes? }
 */
app.post("/api/inscricoes", (req, res) => {
  const {
    jogadoraId,
    campeonato,
    posicao,
    experiencia,
    disponibilidade,
    time,
    observacoes,
  } = req.body;
  const errors = {};

  // validações básicas
  if (!Number.isInteger(jogadoraId) || jogadoraId <= 0) {
    errors.jogadoraId = "ID da jogadora inválido (deve ser inteiro).";
  }
  if (!campeonato || typeof campeonato !== "string") {
    errors.campeonato = "Nome do campeonato é obrigatório.";
  }
  if (!posicao || typeof posicao !== "string") {
    errors.posicao = "Posição é obrigatória.";
  }
  if (!experiencia || typeof experiencia !== "string") {
    errors.experiencia = "Nível de experiência é obrigatório.";
  }
  if (!disponibilidade || typeof disponibilidade !== "string") {
    errors.disponibilidade = "Disponibilidade é obrigatória.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  const jogadora = jogadoras.find((j) => j.id === jogadoraId);
  if (!jogadora) {
    return res
      .status(404)
      .json({ success: false, error: "Jogadora não encontrada." });
  }

  // evitar inscrição duplicada no mesmo campeonato
  const duplicada = inscricoes.find(
    (i) =>
      i.jogadoraId === jogadoraId &&
      i.campeonato.toLowerCase() === campeonato.toLowerCase()
  );
  if (duplicada) {
    return res.status(409).json({
      success: false,
      error: "Jogadora já inscrita neste campeonato.",
    });
  }

  const nova = {
    id: proximIdInscricao++,
    jogadoraId,
    campeonato: campeonato.trim(),
    posicao,
    experiencia,
    disponibilidade,
    time: time || "Independente",
    observacoes: observacoes || "",
    createdAt: new Date().toISOString(),
    status: "pendente", // pendente | confirmada | cancelada
  };

  inscricoes.push(nova);
  return res
    .status(201)
    .json({ success: true, message: "Inscrição criada.", inscricao: nova });
});

/**
 * Listar inscrições (opcional query ?campeonato=Nome)
 * GET /api/inscricoes
 */
app.get("/api/inscricoes", (req, res) => {
  const { campeonato } = req.query;
  let resultado = inscricoes;

  if (campeonato) {
    resultado = resultado.filter(
      (i) => i.campeonato.toLowerCase() === campeonato.toLowerCase()
    );
  }

  // enriquecer com dados da jogadora (somente nome e telefone, sem senha)
  const lista = resultado.map((i) => {
    const j = jogadoras.find((x) => x.id === i.jogadoraId);
    return {
      ...i,
      jogadora: j
        ? { id: j.id, nome: j.nome, email: j.email, telefone: j.telefone }
        : null,
    };
  });

  return res.json(lista);
});

/**
 * Rota para confirmar/cancelar inscrição (simples)
 * PATCH /api/inscricoes/:id
 * body: { action: "confirmar" | "cancelar" }
 */
app.patch("/api/inscricoes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { action } = req.body;

  const ins = inscricoes.find((x) => x.id === id);
  if (!ins)
    return res
      .status(404)
      .json({ success: false, error: "Inscrição não encontrada." });

  if (action === "confirmar") ins.status = "confirmada";
  else if (action === "cancelar") ins.status = "cancelada";
  else return res.status(400).json({ success: false, error: "Ação inválida." });

  return res.json({
    success: true,
    message: `Inscrição ${ins.status}.`,
    inscricao: ins,
  });
});

// ---------- iniciar servidor ----------
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
