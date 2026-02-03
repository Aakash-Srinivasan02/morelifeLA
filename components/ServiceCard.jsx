'use client';

export default function ServiceCard({ title, description, icon, link = null }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="mb-4 text-dark">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {link && (
        <a href={link} className="text-primary hover:underline font-semibold">
          Learn More →
        </a>
      )}
    </div>
  );
}
