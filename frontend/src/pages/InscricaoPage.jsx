"use client";

import { useState } from "react";

const InscricaoPage = () => {
  const [formData, setFormData] = useState({
    campeonato: "",
    posicao: "",
    timeReferencia: "",
    experiencia: "",
    disponibilidade: "",
    observacoes: "",
  });

  const posicoesFutebol = [
    "Goleiro",
    "Lateral Direito",
    "Lateral Esquerdo",
    "Zagueiro Central",
    "Volante",
    "Meio-campo Central",
    "Meio-campo Ofensivo",
    "Ponta Direita",
    "Ponta Esquerda",
    "Centroavante",
    "Segundo Atacante",
  ];

  const niveisExperiencia = [
    "Iniciante (0-1 anos)",
    "Intermediário (2-5 anos)",
    "Avançado (5+ anos)",
    "Profissional/Semi-profissional",
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
            Inscreva-se nos{" "}
            <span className="text-primary">Campeonatos de Futebol</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faça sua inscrição individual nos melhores campeonatos de futebol da
            região. Após a inscrição, você será alocada em um time ou poderá
            formar equipe com outras jogadoras!
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
                      Liga de Futebol Amador
                    </h4>
                    <p className="text-sm text-gray-600">
                      Futebol • 20 Dez • R$ 2.500
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">
                      Torneio de Futebol Society
                    </h4>
                    <p className="text-sm text-gray-600">
                      Society • 25 Dez • R$ 1.500
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    ℹ️ Como Funciona
                  </h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Faça sua inscrição individual</li>
                    <li>• Seja alocada em um time</li>
                    <li>• Ou forme equipe com outras jogadoras</li>
                    <li>• Receba informações por WhatsApp</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    📋 Documentos Necessários
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• RG ou CPF</li>
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
                  Inscrição Individual
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campeonato *
                    </label>
                    <select
                      name="campeonato"
                      value={formData.campeonato}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Selecione o campeonato</option>
                      <option value="copa-passa-a-bola">
                        Copa Passa A Bola 2024
                      </option>
                      <option value="liga-amador">
                        Liga de Futebol Amador
                      </option>
                      <option value="torneio-society">
                        Torneio de Futebol Society
                      </option>
                    </select>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      ⚽ Suas Informações Esportivas
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Posição Preferida *
                        </label>
                        <select
                          name="posicao"
                          value={formData.posicao}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Selecione sua posição</option>
                          {posicoesFutebol.map((posicao) => (
                            <option key={posicao} value={posicao}>
                              {posicao}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nível de Experiência *
                        </label>
                        <select
                          name="experiencia"
                          value={formData.experiencia}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Selecione seu nível</option>
                          {niveisExperiencia.map((nivel) => (
                            <option key={nivel} value={nivel}>
                              {nivel}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Atual ou de Referência
                        </label>
                        <input
                          type="text"
                          name="timeReferencia"
                          value={formData.timeReferencia}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Ex: Santos FC, Independente, etc."
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Pode ser "Independente" se não tem time
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Disponibilidade *
                        </label>
                        <select
                          name="disponibilidade"
                          value={formData.disponibilidade}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">
                            Selecione sua disponibilidade
                          </option>
                          <option value="fins-de-semana">
                            Apenas fins de semana
                          </option>
                          <option value="noites-semana">
                            Noites da semana
                          </option>
                          <option value="qualquer-horario">
                            Qualquer horário
                          </option>
                          <option value="flexivel">Horário flexível</option>
                        </select>
                      </div>
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
                      placeholder="Conte um pouco sobre sua experiência, objetivos, ou qualquer informação adicional..."
                    ></textarea>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">
                      ✅ Próximos Passos
                    </h4>
                    <p className="text-sm text-green-700">
                      Após sua inscrição, entraremos em contato via WhatsApp
                      para formar os times e passar todas as informações sobre
                      treinos, jogos e documentação necessária.
                    </p>
                  </div>

                  {/* Botão de Envio */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="btn-primary flex-1">
                      Fazer Minha Inscrição
                    </button>
                    <button
                      type="button"
                      className="btn-secondary flex-1"
                      onClick={() =>
                        setFormData({
                          campeonato: "",
                          posicao: "",
                          timeReferencia: "",
                          experiencia: "",
                          disponibilidade: "",
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
