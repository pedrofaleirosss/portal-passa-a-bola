"use client";

import { useState } from "react";

const InscricaoPage = () => {
  const [formData, setFormData] = useState({
    modalidade: "",
    nomeTime: "",
    nomeCapitao: "",
    emailCapitao: "",
    telefoneCapitao: "",
    numeroJogadores: "",
    observacoes: "",
  });

  const modalidades = [
    { value: "futebol", label: "Futebol (11 jogadores)" },
    { value: "futsal", label: "Futsal (5 jogadores)" },
    { value: "basquete", label: "Basquete (5 jogadores)" },
    { value: "volei", label: "Vôlei (6 jogadores)" },
    { value: "volei-praia", label: "Vôlei de Praia (2 jogadores)" },
    { value: "handebol", label: "Handebol (7 jogadores)" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da inscrição:", formData);
    alert("Inscrição realizada com sucesso! Entraremos em contato em breve.");
    // Aqui você integraria com o backend
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Inscrição para <span className="text-primary">Campeonatos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inscreva seu time nos melhores campeonatos esportivos da região.
            Preencha o formulário abaixo e garante sua vaga!
          </p>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações dos Campeonatos */}
            <div className="lg:col-span-1">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Campeonatos Disponíveis
                </h3>

                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Copa Passa A Bola 2024
                    </h4>
                    <p className="text-sm text-gray-600">
                      Futebol • 15 Dez • R$ 5.000
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Liga de Basquete Urbano
                    </h4>
                    <p className="text-sm text-gray-600">
                      Basquete • 20 Dez • R$ 2.500
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Torneio de Vôlei de Praia
                    </h4>
                    <p className="text-sm text-gray-600">
                      Vôlei • 25 Dez • R$ 1.500
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    📋 Documentos Necessários
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• RG de todos os jogadores</li>
                    <li>• Atestado médico</li>
                    <li>• Comprovante de pagamento</li>
                    <li>• Foto 3x4 recente</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Formulário de Inscrição
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Modalidade */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Modalidade Esportiva *
                    </label>
                    <select
                      name="modalidade"
                      value={formData.modalidade}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma modalidade</option>
                      {modalidades.map((modalidade) => (
                        <option key={modalidade.value} value={modalidade.value}>
                          {modalidade.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nome do Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome do Time *
                    </label>
                    <input
                      type="text"
                      name="nomeTime"
                      value={formData.nomeTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Ex: Águias FC"
                    />
                  </div>

                  {/* Dados do Capitão */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome do Capitão *
                      </label>
                      <input
                        type="text"
                        name="nomeCapitao"
                        value={formData.nomeCapitao}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número de Jogadores *
                      </label>
                      <input
                        type="number"
                        name="numeroJogadores"
                        value={formData.numeroJogadores}
                        onChange={handleChange}
                        required
                        min="1"
                        max="25"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Ex: 11"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email do Capitão *
                      </label>
                      <input
                        type="email"
                        name="emailCapitao"
                        value={formData.emailCapitao}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="email@exemplo.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone do Capitão *
                      </label>
                      <input
                        type="tel"
                        name="telefoneCapitao"
                        value={formData.telefoneCapitao}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  {/* Observações */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Observações
                    </label>
                    <textarea
                      name="observacoes"
                      value={formData.observacoes}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Informações adicionais sobre o time..."
                    ></textarea>
                  </div>

                  {/* Botão de Envio */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary flex-1">
                      Realizar Inscrição
                    </button>
                    <button
                      type="button"
                      className="btn-secondary flex-1"
                      onClick={() =>
                        setFormData({
                          modalidade: "",
                          nomeTime: "",
                          nomeCapitao: "",
                          emailCapitao: "",
                          telefoneCapitao: "",
                          numeroJogadores: "",
                          observacoes: "",
                        })
                      }
                    >
                      Limpar Formulário
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InscricaoPage;
