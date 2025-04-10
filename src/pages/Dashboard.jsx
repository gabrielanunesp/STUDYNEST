// src/pages/Dashboard.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const progressoData = [
    { name: "Módulo 1", progresso: 20 },
    { name: "Módulo 2", progresso: 45 },
    { name: "Módulo 3", progresso: 70 },
    { name: "Módulo 4", progresso: 90 },
  ];

  const cursos = [
    "HTML e CSS",
    "JavaScript Intermediário",
    "React Básico",
    "Lógica de Programação",
  ];

  const conquistas = [
    "🏅 Medalha de Ouro - Quiz de Lógica",
    "📜 Certificado - HTML Básico",
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <div className="flex justify-between items-center p-6">
          <h1 className="text-3xl font-bold">Bem-vindo ao StudyNest! 🦉</h1>
          <button
            onClick={toggleTheme}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 px-4">
          {/* Gráfico de Progresso */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-2">Seu Progresso</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={progressoData}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line type="monotone" dataKey="progresso" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Conquistas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 w-full md:w-1/2"
          >
            <h2 className="text-xl font-semibold mb-4">Suas Conquistas</h2>
            <ul className="space-y-2">
              {conquistas.map((item, i) => (
                <li
                  key={i}
                  className="bg-green-100 dark:bg-green-800 text-green-900 dark:text-green-200 px-4 py-2 rounded-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Lista de Cursos */}
        <div className="mt-10 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Seus Cursos</h2>
            <ul className="space-y-2">
              {cursos.map((curso, i) => (
                <li
                  key={i}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-200 px-4 py-2 rounded-xl"
                >
                  {curso}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mascote */}
        <div className="mt-10 text-center">
          <img
            src="/mascote-coruja.png"
            alt="Mascote Coruja"
            className="mx-auto w-24 h-24"
          />
          <p className="text-lg font-medium mt-2">
            Continue estudando e colecionando conquistas! 💡
          </p>
        </div>

        {/* Link para voltar ao login */}
        <div className="mt-10 text-center">
          <p className="text-sm">Deseja sair?</p>
          <Link
            to="/"
            className="inline-block mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Voltar para o Login
          </Link>
        </div>
      </div>
    </div>
  );
}
