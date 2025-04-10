// src/components/Courses.jsx
import { motion } from "framer-motion";

const courses = [
  { title: "HTML e CSS", progresso: "60%" },
  { title: "JavaScript", progresso: "30%" },
  { title: "React", progresso: "10%" },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Seus Cursos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {courses.map((curso, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{curso.title}</h2>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: curso.progresso }}
              ></div>
            </div>
            <p className="mt-2">Progresso: {curso.progresso}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
