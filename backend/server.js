// server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = "seu_segredo_jwt_aqui"; // Em produção, usar variável de ambiente

app.use(cors());
app.use(express.json());

// ---------- Caminhos dos arquivos ----------
const dataDir = path.join(__dirname, "data");
const jogadorasFile = path.join(dataDir, "jogadoras.json");
const inscricoesFile = path.join(dataDir, "inscricoes.json");

// ---------- Funções utilitárias ----------
function ensureDataFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  if (!fs.existsSync(jogadorasFile)) fs.writeFileSync(jogadorasFile, "[]");
  if (!fs.existsSync(inscricoesFile)) fs.writeFileSync(inscricoesFile, "[]");
}

function loadJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch (error) {
    console.error(`Erro ao ler ${filePath}:`, error);
    return [];
  }
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Inicializa arquivos se não existirem
ensureDataFiles();

// "Banco" em memória
let jogadoras = loadJSON(jogadorasFile);
let inscricoes = loadJSON(inscricoesFile);
let proximIdJogadora = jogadoras.length
  ? Math.max(...jogadoras.map((j) => j.id)) + 1
  : 1;
let proximIdInscricao = inscricoes.length
  ? Math.max(...inscricoes.map((i) => i.id)) + 1
  : 1;

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

function gerarToken(usuario) {
  return jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );
}

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token não fornecido." });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token inválido." });
    req.user = user;
    next();
  });
}

// ---------- Rotas ----------

// Health check
app.get("/", (req, res) => {
  res.send({ ok: true, message: "Servidor rodando" });
});

// Cadastro de jogadora
app.post("/api/jogadoras", async (req, res) => {
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

  // Criptografar a senha
  const senhaHash = await bcrypt.hash(senha, 10);

  const nova = {
    id: proximIdJogadora++,
    nome: nome.trim(),
    email: email.toLowerCase(),
    senha: senhaHash,
    telefone: telefone.trim(),
    dataNascimento,
    posicao: posicao || null,
    criadoEm: new Date().toISOString(),
  };

  jogadoras.push(nova);
  saveJSON(jogadorasFile, jogadoras);

  return res.status(201).json({
    success: true,
    message: "Jogadora cadastrada.",
    jogadora: retornaSemSenha(nova),
  });
});

// Login
app.post("/api/login", async (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    return res
      .status(400)
      .json({ success: false, error: "Email e senha são obrigatórios." });
  }

  const usuario = jogadoras.find((j) => j.email === email.toLowerCase());
  if (!usuario) {
    return res
      .status(401)
      .json({ success: false, error: "Credenciais inválidas." });
  }

  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) {
    return res
      .status(401)
      .json({ success: false, error: "Credenciais inválidas." });
  }

  const token = gerarToken(usuario);

  return res.json({
    success: true,
    message: "Login realizado.",
    jogadora: retornaSemSenha(usuario),
    token,
  });
});

// Listar jogadoras
app.get("/api/jogadoras", (req, res) => {
  return res.json(jogadoras.map(retornaSemSenha));
});

app.get("/api/jogadoras/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const jogadora = jogadoras.find((j) => j.id === id);
  if (!jogadora) {
    return res
      .status(404)
      .json({ success: false, error: "Jogadora não encontrada." });
  }
  return res.json({ success: true, jogadora: retornaSemSenha(jogadora) });
});

// Criar inscrição em campeonato
app.post("/api/inscricoes", autenticarToken, (req, res) => {
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
  saveJSON(inscricoesFile, inscricoes);

  return res
    .status(201)
    .json({ success: true, message: "Inscrição criada.", inscricao: nova });
});

// Listar inscrições
app.get("/api/inscricoes", (req, res) => {
  const { campeonato } = req.query;
  let resultado = inscricoes;

  if (campeonato) {
    resultado = resultado.filter(
      (i) => i.campeonato.toLowerCase() === campeonato.toLowerCase()
    );
  }

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

// Obter inscrições por ID da jogadora
app.get("/api/inscricoes/jogadora/:jogadoraId", (req, res) => {
  const jogadoraId = parseInt(req.params.jogadoraId, 10);
  const inscricoesJogadora = inscricoes.filter(
    (i) => i.jogadoraId === jogadoraId
  );
  if (inscricoesJogadora.length === 0) {
    return res
      .status(404)
      .json({ success: false, error: "Inscrição não encontrada." });
  }

  return res.json({ success: true, inscricoes: inscricoesJogadora });
});

// Confirmar / cancelar inscrição
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

  saveJSON(inscricoesFile, inscricoes);

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
