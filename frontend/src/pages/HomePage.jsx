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
      modalidade: "Futebol",
      titulo: "Liga de Futebol Amador",
      descricao:
        "Competição de futebol 11x11 para jogadoras amadoras. Venha mostrar suas habilidades.",
      data: "20 Dez",
      participantes: "24 times",
      premio: "R$ 2.500",
    },
    {
      id: 3,
      modalidade: "Society",
      titulo: "Torneio de Futebol Society",
      descricao:
        "Futebol society 7x7 em campo sintético. Diversão e competição garantidas!",
      data: "25 Dez",
      participantes: "16 times",
      premio: "R$ 1.500",
    },
  ];

  const redesSociais = [
    {
      nome: "Facebook",
      icon: "📘",
      cor: "bg-blue-600",
      descricao: "Acompanhe nossos eventos e interaja com a comunidade",
      link: "https://www.facebook.com/oficialpassaabola/?locale=pt_BR",
    },
    {
      nome: "Instagram",
      icon: "📷",
      cor: "bg-gradient-to-br from-purple-600 to-pink-600",
      descricao: "Fotos e stories dos melhores momentos",
      link: "https://www.instagram.com/passaabola",
    },
    {
      nome: "TikTok",
      icon: "🎵",
      cor: "bg-black",
      descricao: "Mulheres no futebol e um pouco da nossa vida 🤪",
      link: "https://www.tiktok.com/@passabola",
    },
    {
      nome: "YouTube",
      icon: "📺",
      cor: "bg-red-600",
      descricao: "Melhores lances e transmissões ao vivo",
      link: "https://www.youtube.com/@passabola",
    },
    {
      nome: "WhatsApp",
      icon: "💬",
      cor: "bg-green-500",
      descricao:
        "Esse é o nosso portal de notícias, curiosidades da modalidade e também de bastidores da nossa vida.",
      link: "https://www.whatsapp.com/channel/0029Vavm10347XeEyTTNi91i",
    },
    {
      nome: "Spotify",
      icon: "🎧",
      cor: "bg-green-600",
      descricao:
        "Agora o Passa Bola tem um podcast, ou melhor, um PABCAST, o Fala, Bebê.",
      link: "https://open.spotify.com/show/18H1ysI9zyDIRahuCnZGQr?si=32d5583dfaa84544",
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
                  Fazer Inscrição
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

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
                  <a href={rede.link}>Acessar</a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              📧 Receba Nossas Novidades
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Seja o primeiro a saber sobre novos campeonatos, resultados, dicas
              de treino e oportunidades exclusivas. Cadastre-se em nossa
              newsletter e não perca nenhum lance!
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">
                  Resultados em Primeira Mão
                </h3>
                <p className="text-gray-600 text-sm">
                  Receba os resultados dos jogos assim que saírem
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">
                  Novos Campeonatos
                </h3>
                <p className="text-gray-600 text-sm">
                  Seja notificado sobre inscrições e datas importantes
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="font-semibold mb-2 text-primary">
                  Dicas Exclusivas
                </h3>
                <p className="text-gray-600 text-sm">
                  Conteúdo especial para melhorar seu desempenho
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              📧 Enviamos apenas conteúdo relevante • 🔒 Seus dados estão
              seguros • ❌ Cancele quando quiser
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
