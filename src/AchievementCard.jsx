// src/components/AchievementCard.jsx
export default function AchievementCard({ title }) {
    return (
      <div className="bg-yellow-100 p-4 rounded-xl shadow w-48">
        <h3 className="text-center font-semibold">🏆 {title}</h3>
      </div>
    );
  }
  