const SobrePage = () => {
  const valores = [
    {
      titulo: "Paixão pelo Esporte",
      descricao:
        "Acreditamos que o esporte transforma vidas e constrói caráter.",
      icon: "⚽",
    },
    {
      titulo: "Inclusão e Diversidade",
      descricao: "Todos são bem-vindos, independente do nível ou experiência.",
      icon: "🤝",
    },
    {
      titulo: "Fair Play",
      descricao:
        "Promovemos o jogo limpo e o respeito entre todos os participantes.",
      icon: "🏆",
    },
    {
      titulo: "Comunidade",
      descricao:
        "Construímos uma rede forte de atletas e entusiastas do esporte.",
      icon: "👥",
    },
  ];

  const equipe = [
    {
      nome: "Luana Maluf",
      cargo: "Apresentadora",
      descricao:
        "Luana Maluf é jornalista esportiva e comentarista, com passagem por grandes veículos de mídia. Apaixonada por futebol, se destaca pela análise leve e acessível, trazendo visibilidade para o esporte feminino e novos olhares sobre o jogo. Atualmente integra o time da GE TV, canal digital da Globo.",
      foto: "/luana.png",
    },
    {
      nome: "Alê Xavier",
      cargo: "Apresentadora",
      descricao:
        "Alê Xavier vive o futebol de coração — comentarista, apresentadora e voz ativa na representatividade esportiva. Junto com a Luana Maluf, faz o “Passa a Bola” acontecer, mostrando que futebol também é coisa de mulheres que jogam, falam, se apaixonam pelo campo.",
      foto: "/ale.png",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-primary">Passa A Bola</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa dedicada a promover o esporte e conectar atletas
            através de campeonatos organizados e experiências inesquecíveis.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-gray-600 mb-4">
                A Passa a Bola nasceu com o propósito de fortalecer o futebol
                feminino e dar mais visibilidade às mulheres no esporte.
              </p>
              <p className="text-gray-600 mb-4">
                Desde sua criação, o projeto tem se dedicado a compartilhar
                conteúdos exclusivos nas redes sociais, organizando iniciativas
                como o Campeonato Passa a Bola, que conecta atletas, equipes e
                torcedores em um espaço de valorização e representatividade.
              </p>
              <p className="text-gray-600">
                Mais do que uma página, a Passa a Bola se tornou uma comunidade,
                construída por quem acredita no potencial transformador do
                futebol feminino no Brasil.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 text-center">
              <img src="/foto-sobre.jpg" alt="Sobre a Passa A Bola" />
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais apaixonados que tornam tudo isso
              possível.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mx-auto">
            {equipe.map((membro, index) => (
              <div
                key={index}
                className="card text-center group hover:shadow-lg transition-shadow duration-300 max-w-[500px]"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src={membro.foto}
                    alt={`Foto de ${membro.nome}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {membro.nome}
                </h3>
                <p className="font-medium mb-3 text-primary">{membro.cargo}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {membro.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gradient-to-br from-purple-800 to-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Números</h2>
            <p className="text-purple-100 max-w-2xl mx-auto">
              Resultados que demonstram nosso compromisso com a excelência.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Atletas Cadastrados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-purple-100">Eventos Realizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-purple-100">Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e definem quem somos como
              empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
