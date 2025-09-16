"use client";

import { useState } from "react";

const CadastroPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    senha: "",
    confirmarSenha: "",
    fotoPerfil: null,
    documentoOficial: null,
    comprovanteResidencia: null,
    aceitaTermos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
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

    const hoje = new Date();
    const nascimento = new Date(formData.dataNascimento);
    const idade = hoje.getFullYear() - nascimento.getFullYear();

    if (idade < 16) {
      alert("Idade mínima para cadastro é 16 anos!");
      return;
    }

    console.log("Dados do cadastro:", formData);
    alert("Cadastro realizado com sucesso! Bem-vindo à Passa A Bola!");
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
            Junte-se à nossa comunidade de futebol! Crie sua conta e tenha
            acesso a todos os campeonatos e torneios de futebol.
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
                    <span className="text-green-500 text-xl">⚽</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Campeonatos de Futebol
                      </h4>
                      <p className="text-sm text-gray-600">
                        Acesso a todos os torneios
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">🏆</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Histórico de Jogos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Acompanhe suas estatísticas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">👥</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Networking
                      </h4>
                      <p className="text-sm text-gray-600">
                        Conecte-se com outros jogadores
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">🎯</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Eventos Especiais
                      </h4>
                      <p className="text-sm text-gray-600">
                        Convites para peneiras e clínics
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
                  Criar Conta de Jogador
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      📋 Informações Obrigatórias
                    </h4>

                    {/* Dados Pessoais */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        <p className="text-xs text-gray-500 mt-1">
                          Idade mínima: 16 anos
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        <p className="text-xs text-gray-500 mt-1">
                          Usado para login e comunicação
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone/WhatsApp *
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
                        <p className="text-xs text-gray-500 mt-1">
                          Para notificações importantes
                        </p>
                      </div>
                    </div>

                    {/* Senhas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

                    {/* Foto de Perfil */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Foto de Perfil
                      </label>
                      <input
                        type="file"
                        name="fotoPerfil"
                        onChange={handleChange}
                        accept="image/*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Opcional no início - para identificação e crachá digital
                      </p>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      📎 Documentos (Opcionais)
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Estes documentos são opcionais agora, mas serão
                      obrigatórios na validação final para participar dos
                      campeonatos.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Documento Oficial (RG/CPF)
                        </label>
                        <input
                          type="file"
                          name="documentoOficial"
                          onChange={handleChange}
                          accept="image/*,.pdf"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Upload opcional - será necessário para validação final
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Comprovante de Residência/Escolaridade
                        </label>
                        <input
                          type="file"
                          name="comprovanteResidencia"
                          onChange={handleChange}
                          accept="image/*,.pdf"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Se houver restrição de categoria (ex: universitário)
                        </p>
                      </div>
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

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-500 text-xl">ℹ️</span>
                      <div>
                        <h4 className="font-semibold text-blue-900">
                          Importante
                        </h4>
                        <p className="text-sm text-blue-700">
                          Para se inscrever em campeonatos, seu perfil deve
                          estar criado e ativo. Informações esportivas
                          específicas serão solicitadas durante a inscrição no
                          campeonato.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Envio */}
                  <button type="submit" className="btn-primary w-full">
                    Criar Conta de Jogador
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
