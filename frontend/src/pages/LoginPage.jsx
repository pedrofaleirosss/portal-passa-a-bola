"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../api";
import Swal from "sweetalert2";
import { useEffect } from "react";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    lembrarMe: false,
  });
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.token) {
        setMensagem(`Bem-vinda, ${data.jogadora.nome}!`);
        // se quiser guardar a jogadora no localStorage:
        localStorage.setItem("jogadora", JSON.stringify(data.jogadora));
        localStorage.setItem("token", data.token);
        Swal.fire({
          title: `Bem-vinda, ${data.jogadora.nome}!`,
          text: "Login realizado com sucesso!",
          icon: "success",
        });
        navigate("/");
      } else {
        setMensagem(`Erro: ${data.error}`);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Erro ao realizar login: ${
            data.error || JSON.stringify(data.errors)
          }`,
        });
      }
    } catch (erro) {
      setMensagem("Erro de conexão com o servidor.");
      console.log(erro);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acesse sua <span className="text-primary">Conta</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entre na sua conta da Passa A Bola e tenha acesso a todos os
            campeonatos de futebol e suas estatísticas.
          </p>
        </div>
      </section>

      {/* Formulário de Login */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefícios do Login */}
            <div className="lg:col-span-1">
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Acesso Exclusivo
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">⚽</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Meus Campeonatos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Veja suas inscrições ativas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">📊</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Estatísticas
                      </h4>
                      <p className="text-sm text-gray-600">
                        Acompanhe seu desempenho
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">🏆</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">Histórico</h4>
                      <p className="text-sm text-gray-600">
                        Todos os seus jogos e resultados
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">🔔</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Notificações
                      </h4>
                      <p className="text-sm text-gray-600">
                        Alertas sobre jogos e eventos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-500 text-xl">💡</span>
                    <div>
                      <h4 className="font-semibold text-purple-900">Dica</h4>
                      <p className="text-sm text-purple-700">
                        Mantenha seu perfil atualizado para receber convites
                        para peneiras e eventos especiais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário de Login */}
            <div className="lg:col-span-2">
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Entrar na Conta
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Senha */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Senha *
                    </label>
                    <input
                      type="password"
                      name="senha"
                      value={formData.senha}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Sua senha"
                      autoComplete="on"
                    />
                  </div>

                  {/* Opções */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="lembrarMe"
                        checked={formData.lembrarMe}
                        onChange={handleChange}
                        className="text-purple-600"
                      />
                      <label className="text-sm text-gray-600">
                        Lembrar de mim
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-purple-600 hover:underline"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>

                  {/* Botão de Login */}
                  <button type="submit" className="btn-primary w-full">
                    Entrar na Conta
                  </button>
                  {mensagem && (
                    <p className="mt-4 text-center text-purple-700 font-medium">
                      {mensagem}
                    </p>
                  )}
                </form>

                {/* Link para Cadastro */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Ainda não tem uma conta?
                    <Link
                      to="/cadastro"
                      className="text-purple-600 hover:underline ml-1"
                    >
                      Cadastre-se aqui
                    </Link>
                  </p>
                </div>

                {/* Informação de Segurança */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">🔒</span>
                    <div>
                      <h4 className="font-semibold text-blue-900">Segurança</h4>
                      <p className="text-sm text-blue-700">
                        Seus dados estão protegidos com criptografia de ponta a
                        ponta. Nunca compartilhamos suas informações pessoais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
