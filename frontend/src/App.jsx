import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import SobrePage from "./pages/SobrePage";
import Footer from "./components/Footer";
import InscricaoPage from "./pages/InscricaoPage";
import CadastroPage from "./pages/CadastroPage";
import NaoEncontradaPage from "./pages/NaoEncontradaPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/inscricao" element={<InscricaoPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="*" element={<NaoEncontradaPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
