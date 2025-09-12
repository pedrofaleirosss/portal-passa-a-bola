import { Link } from "react-router-dom";

const HomePage = () => {
  const eventos = [
    {
      id: 1,
      modalidade: "Futebol",
      titulo: "Copa Passa A Bola 2024",
      descricao:
        "O maior campeonato de futebol amador da região. Inscrições abertas até 10 de dezembro.",
      data: "15 Dez",
      participantes: "32 times",
      premio: "R$ 5.000",
    },
    {
      id: 2,
      modalidade: "Basquete",
      titulo: "Liga de Basquete Urbano",
      descricao:
        "Competição de basquete 3x3 nas quadras da cidade. Venha mostrar suas habilidades.",
      data: "20 Dez",
      participantes: "16 times",
      premio: "R$ 2.500",
    },
    {
      id: 3,
      modalidade: "Vôlei",
      titulo: "Torneio de Vôlei de Praia",
      descricao:
        "Competição na areia com as melhores duplas da região. Diversão garantida!",
      data: "25 Dez",
      participantes: "24 duplas",
      premio: "R$ 1.500",
    },
  ];

  const redesSociais = [
    {
      nome: "Facebook",
      icon: "📘",
      cor: "bg-blue-600",
      descricao: "Acompanhe nossos eventos e interaja com a comunidade",
    },
    {
      nome: "Instagram",
      icon: "📷",
      cor: "bg-gradient-to-br from-purple-600 to-pink-600",
      descricao: "Fotos e stories dos melhores momentos",
    },
    {
      nome: "Twitter",
      icon: "🐦",
      cor: "bg-blue-400",
      descricao: "Resultados em tempo real e atualizações",
    },
    {
      nome: "YouTube",
      icon: "📺",
      cor: "bg-red-600",
      descricao: "Melhores lances e transmissões ao vivo",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conectando Atletas,{" "}
            <span className="text-primary">Criando Campeões</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Participe dos melhores campeonatos esportivos e faça parte de uma
            comunidade apaixonada pelo esporte. Sua próxima vitória começa aqui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inscricao"
              className="btn-primary inline-block text-center"
            >
              Inscrever-se Agora
            </Link>
            <Link
              to="/sobre"
              className="btn-secondary inline-block text-center"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">500+</div>
              <div className="text-gray-600">Atletas Registrados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">50+</div>
              <div className="text-gray-600">Campeonatos Realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2 text-primary">98%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Destaques em Andamento
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Confira os campeonatos mais emocionantes acontecendo agora e não
              perca a chance de participar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventos.map((evento) => (
              <div key={evento.id} className="card">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {evento.modalidade}
                  </span>
                  <span className="text-sm text-gray-500">
                    📅 {evento.data}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {evento.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{evento.descricao}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>👥 {evento.participantes}</span>
                  <span>🏆 {evento.premio}</span>
                </div>
                <Link
                  to="/inscricao"
                  className="btn-primary w-full text-center block"
                >
                  Inscrever Time
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Siga Nossas Redes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fique por dentro de todas as novidades, resultados e momentos
              especiais dos nossos campeonatos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {redesSociais.map((rede) => (
              <div key={rede.nome} className="card text-center">
                <div
                  className={`w-12 h-12 ${rede.cor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-2xl">{rede.icon}</span>
                </div>
                <h3 className="font-semibold mb-2">{rede.nome}</h3>
                <p className="text-sm text-gray-600 mb-4">{rede.descricao}</p>
                <button className="btn-secondary text-sm">
                  {rede.nome === "YouTube" ? "Inscrever" : "Seguir"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
