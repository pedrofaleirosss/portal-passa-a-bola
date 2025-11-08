"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/sobre", label: "Sobre Nós" },
    // { path: "/dashboard", label: "Dashboard" },
    { path: "/inscricao", label: "Inscrições" },
    { path: "/cadastro", label: "Cadastro" },
    { path: "/login", label: "Login" },
  ];

  const token = localStorage.getItem("token");

  if (token) {
    navItems.splice(3, 2);
    navItems.push({ path: "/meu-perfil", label: "Meu Perfil" });
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("jogadora");
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Passa a Bola Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">
              Portal Passa A Bola
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {token && (
              <button
                onClick={handleLogout}
                className="font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Sair
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-600 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {token && (
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 font-medium text-gray-600 hover:text-primary cursor-pointer"
              >
                Sair
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
