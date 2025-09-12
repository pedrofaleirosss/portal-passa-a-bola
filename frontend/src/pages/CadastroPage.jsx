"use client";

import { useState } from "react";

const CadastroPage = () => {
  const [formData, setFormData] = useState({
    tipoUsuario: "",
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    modalidadesFavoritas: [],
    experiencia: "",
    posicao: "",
    senha: "",
    confirmarSenha: "",
    aceitaTermos: false,
  });

  const modalidades = [
    "Futebol",
    "Futsal",
    "Basquete",
    "Vôlei",
    "Vôlei de Praia",
    "Handebol",
    "Tênis",
    "Natação",
    "Atletismo",
    "Outros",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "modalidadesFavoritas") {
      setFormData((prev) => ({
        ...prev,
        modalidadesFavoritas: checked
          ? [...prev.modalidadesFavoritas, value]
          : prev.modalidadesFavoritas.filter((m) => m !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!formData.aceitaTermos) {
      alert("Você deve aceitar os termos de uso!");
      return;
    }

    console.log("Dados do cadastro:", formData);
    alert("Cadastro realizado com sucesso! Bem-vindo à Passa A Bola!");
    // Aqui você integraria com o backend
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cadastre-se na <span className="text-primary">Passa A Bola</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se à nossa comunidade esportiva! Crie sua conta e tenha acesso
            a todos os campeonatos e eventos exclusivos.
          </p>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Benefícios */}
            <div className="lg:col-span-1">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Benefícios do Cadastro
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Inscrições Prioritárias
                      </h4>
                      <p className="text-sm text-gray-600">
                        Acesso antecipado aos campeonatos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Histórico Completo
                      </h4>
                      <p className="text-sm text-gray-600">
                        Acompanhe suas participações
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Eventos Exclusivos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Convites para eventos especiais
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✅</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Networking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Conecte-se com outros atletas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Criar Conta
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Tipo de Usuário */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Usuário *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {["atleta", "tecnico", "organizador"].map((tipo) => (
                        <label
                          key={tipo}
                          className="flex items-center space-x-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <input
                            type="radio"
                            name="tipoUsuario"
                            value={tipo}
                            checked={formData.tipoUsuario === tipo}
                            onChange={handleChange}
                            className="text-purple-600"
                          />
                          <span className="capitalize font-medium">{tipo}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Dados Pessoais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data de Nascimento *
                      </label>
                      <input
                        type="date"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="000.000.000-00"
                    />
                  </div>

                  {/* Endereço */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Endereço
                      </label>
                      <input
                        type="text"
                        name="endereco"
                        value={formData.endereco}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Rua, número, bairro"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CEP
                      </label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="00000-000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Sua cidade"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      <select
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        {/* Adicionar outros estados */}
                      </select>
                    </div>
                  </div>

                  {/* Modalidades Favoritas */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modalidades de Interesse
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {modalidades.map((modalidade) => (
                        <label
                          key={modalidade}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="modalidadesFavoritas"
                            value={modalidade}
                            checked={formData.modalidadesFavoritas.includes(
                              modalidade
                            )}
                            onChange={handleChange}
                            className="text-purple-600"
                          />
                          <span className="text-sm">{modalidade}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Senhas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Senha *
                      </label>
                      <input
                        type="password"
                        name="senha"
                        value={formData.senha}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Mínimo 8 caracteres"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirmar Senha *
                      </label>
                      <input
                        type="password"
                        name="confirmarSenha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Repita a senha"
                      />
                    </div>
                  </div>

                  {/* Termos */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="aceitaTermos"
                      checked={formData.aceitaTermos}
                      onChange={handleChange}
                      required
                      className="mt-1 text-purple-600"
                    />
                    <label className="text-sm text-gray-600">
                      Eu aceito os{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        termos de uso
                      </a>{" "}
                      e a{" "}
                      <a href="#" className="text-purple-600 hover:underline">
                        política de privacidade
                      </a>{" "}
                      *
                    </label>
                  </div>

                  {/* Botão de Envio */}
                  <button type="submit" className="btn-primary w-full">
                    Criar Conta
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Já tem uma conta?
                    <a
                      href="#"
                      className="text-purple-600 hover:underline ml-1"
                    >
                      Faça login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CadastroPage;
