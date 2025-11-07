"use client";

import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MeuPerfilPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }

    // pegar os dados da jogadora do localStorage
    const jogadora = JSON.parse(localStorage.getItem("jogadora"));

    if (!jogadora) {
      navigate("/login");
    }

    setJogadora(jogadora);

    const fetchInscricao = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/inscricoes/jogadora/${jogadora.id}`
        );
        const data = await response.json();
        if (data.success) {
          setInscricoes(data.inscricoes);
        }
      } catch (error) {
        console.error("Erro ao buscar inscrições:", error);
      }
    };

    fetchInscricao();
  }, [navigate]);

  const [abaSelecionada, setAbaSelecionada] = useState("informacoes");
  const [inscricoes, setInscricoes] = useState([]);
  const [jogadora, setJogadora] = useState([]);

  const estatisticas = {
    jogosParticipados: 17,
    golsMarcados: 6,
    assistencias: 3,
    mediaGolsPorJogo: "0.35",
    ranking: "12º lugar",
  };

  return (
    <div>
      {/* Hero Section com Foto e Dados Básicos */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
        <div className="container">
          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start ">
              {/* Foto */}
              <div className="md:col-span-1 text-center">
                <div className="w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden shadow-lg border-4 border-primary">
                  <img
                    src={jogadora.fotoPerfil || "/logo.png"}
                    alt={jogadora.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Meu Perfil</h2>
              </div>

              {/* Informações Básicas */}
              <div className="md:col-span-3">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                      {jogadora.nome}
                    </h1>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold">
                        {jogadora.status}
                      </span>
                      <span className="text-gray-600">
                        Membro desde{" "}
                        {new Date(jogadora.criadoEm).toLocaleDateString(
                          "pt-BR"
                        )}
                      </span>
                    </div>
                  </div>
                  <Link to="/editar-perfil" className="btn-primary">
                    Editar Perfil
                  </Link>
                </div>

                {/* Cards de Info Rápida */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">E-mail</p>
                    <p className="text-xl font-bold text-primary">
                      {jogadora.email}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Telefone</p>
                    <p className="text-xl font-bold text-primary">
                      {jogadora.telefone}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">
                      Data de Nascimento
                    </p>
                    <p className="text-xl font-bold text-primary">
                      {jogadora.dataNascimento &&
                        new Date(jogadora.dataNascimento).toLocaleDateString(
                          "pt-BR"
                        )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abas de Conteúdo */}
      <section className="py-16">
        <div className="container">
          {/* Abas */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 pb-4">
            <button
              onClick={() => setAbaSelecionada("informacoes")}
              className={`px-6 py-3 font-semibold transition-colors ${
                abaSelecionada === "informacoes"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Informações Pessoais
            </button>
            <button
              onClick={() => setAbaSelecionada("inscricoes")}
              className={`px-6 py-3 font-semibold transition-colors ${
                abaSelecionada === "inscricoes"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Minhas Inscrições
            </button>
            <button
              onClick={() => setAbaSelecionada("estatisticas")}
              className={`px-6 py-3 font-semibold transition-colors ${
                abaSelecionada === "estatisticas"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              Estatísticas
            </button>
          </div>

          {/* Conteúdo das Abas */}
          {abaSelecionada === "informacoes" && (
            <div className=" gap-8">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Dados Pessoais
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Nome Completo</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {jogadora.nome}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {jogadora.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Telefone/WhatsApp
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {jogadora.telefone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Data de Nascimento
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      {new Date(jogadora.dataNascimento).toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {abaSelecionada === "inscricoes" && (
            <div className="space-y-4">
              {inscricoes.map((inscricao) => (
                <div key={inscricao.id} className="card">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1 capitalize">
                        {inscricao.campeonato}
                      </h4>
                      <span
                        className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${
                          inscricao.status === "Em andamento"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {inscricao.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Time</p>
                      <p className="text-lg font-bold text-primary">
                        {inscricao.time}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Posição</p>
                      <p className="text-lg font-bold text-primary">
                        {inscricao.posicao}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Criada em:</p>
                      <p className="text-lg font-bold text-primary">
                        {new Date(inscricao.createdAt).toLocaleDateString(
                          "pt-BR"
                        )}
                      </p>
                    </div>
                    {/* <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Gols • Ass</p>
                      <p className="text-lg font-bold text-primary">
                        {camp.gols} • {camp.assistencias}
                      </p>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}

          {abaSelecionada === "estatisticas" && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="card text-center">
                <p className="text-sm text-gray-600 mb-2">Jogos Participados</p>
                <p className="text-4xl font-bold text-primary">
                  {estatisticas.jogosParticipados}
                </p>
              </div>
              <div className="card text-center">
                <p className="text-sm text-gray-600 mb-2">Gols Marcados</p>
                <p className="text-4xl font-bold text-primary">
                  {estatisticas.golsMarcados}
                </p>
              </div>
              <div className="card text-center">
                <p className="text-sm text-gray-600 mb-2">Assistências</p>
                <p className="text-4xl font-bold text-primary">
                  {estatisticas.assistencias}
                </p>
              </div>
              <div className="card text-center">
                <p className="text-sm text-gray-600 mb-2">Média de Gols</p>
                <p className="text-4xl font-bold text-primary">
                  {estatisticas.mediaGolsPorJogo}
                </p>
              </div>
              <div className="card text-center">
                <p className="text-sm text-gray-600 mb-2">Ranking Geral</p>
                <p className="text-4xl font-bold text-primary">
                  {estatisticas.ranking}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MeuPerfilPage;
