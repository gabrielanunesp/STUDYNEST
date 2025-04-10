// src/pages/Ranking.jsx
import { Link } from "react-router-dom";

const ranking = [
  { nome: "Gabriela", pontos: 950 },
  { nome: "João", pontos: 870 },
  { nome: "Larissa", pontos: 810 },
  { nome: "Carlos", pontos: 750 },
];

export default function Ranking() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🏆 Ranking de Estudantes</h1>

      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
        <ul className="space-y-4">
          {ranking.map((user, index) => (
            <li
              key={user.nome}
              className="flex justify-between items-center text-lg px-4 py-2 rounded-xl bg-blue-100 dark:bg-blue-700"
            >
              <span>
                {index + 1}º {user.nome}
              </span>
              <span className="font-bold">{user.pontos} pts</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <Link
            to="/dashboard"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Voltar ao Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
