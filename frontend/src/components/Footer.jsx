import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">PB</span>
              </div> */}
              <img
                src="/logo-branca.png"
                alt="Passa a Bola Logo"
                className="h-12 w-auto rounded-full"
              />
              <span className="text-xl font-bold">Passa A Bola</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Conectando atletas e criando campeões através dos melhores
              campeonatos esportivos da região.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/oficialpassaabola/?locale=pt_BR"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/passaabola"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@passabola"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">Tik Tok</span>
                <FaTiktok size={24} />
              </a>
              <a
                href="https://www.youtube.com/@passabola"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="/inscricao"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Inscrições
                </a>
              </li>
              <li>
                <a
                  href="/cadastro"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Cadastro
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <MdOutlineEmail /> contato@passaabola.com.br
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                (11) 9999-9999
              </li>
              <li className="flex items-center gap-2">
                <IoLocationSharp />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Passa A Bola. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
