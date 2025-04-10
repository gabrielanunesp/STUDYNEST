import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de cadastro
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-80 space-y-4">
        <h1 className="text-2xl font-bold text-center text-green-700">Cadastro</h1>
        <input
          type="text"
          placeholder="Nome"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Cadastrar
        </button>
        <p className="text-center text-sm">
          Já tem conta?{" "}
          <Link to="/" className="text-green-600 hover:underline">
            Entrar
          </Link>
        </p>
      </form>
    </div>
  );
}
