import { Link } from "react-router-dom";

const NaoEncontradaPage = () => {
  const sugestoes = [
    {
      nome: "Página Inicial",
      link: "/",
      descricao: "Volte para a página principal",
    },
    {
      nome: "Sobre Nós",
      link: "/sobre",
      descricao: "Conheça mais sobre a Passa A Bola",
    },
    {
      nome: "Inscrições",
      link: "/inscricao",
      descricao: "Inscreva seu time nos campeonatos",
    },
    {
      nome: "Cadastro",
      link: "/cadastro",
      descricao: "Crie sua conta na plataforma",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <div className="text-8xl mb-6">⚽</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ops! <span className="text-primary">Página não encontrada</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Parece que a página que você está procurando saiu de campo. Não se
            preocupe, vamos te ajudar a encontrar o caminho de volta!
          </p>
          <div className="text-6xl font-bold text-primary mb-4">404</div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onde você gostaria de ir?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aqui estão algumas páginas que podem te interessar. Escolha uma
              opção abaixo para continuar navegando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sugestoes.map((sugestao, index) => (
              <Link
                key={index}
                to={sugestao.link}
                className="card hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl mb-4">
                    {index === 0 && "🏠"}
                    {index === 1 && "ℹ️"}
                    {index === 2 && "📝"}
                    {index === 3 && "👤"}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sugestao.nome}
                  </h3>
                  <p className="text-gray-600 text-sm">{sugestao.descricao}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Precisa de ajuda?
            </h2>
            <p className="text-gray-600 mb-8">
              Se você chegou aqui através de um link que deveria funcionar,
              entre em contato conosco para que possamos resolver o problema.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm">contato@passaabola.com</p>
              </div>

              <div className="card">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-600 text-sm">(11) 99999-9999</p>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/" className="btn-primary inline-block">
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaoEncontradaPage;
