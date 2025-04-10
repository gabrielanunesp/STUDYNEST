/ src/components/CourseCard.jsx
export default function CourseCard({ title, description }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
