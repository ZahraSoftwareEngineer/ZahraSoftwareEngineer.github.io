
import React from 'react';

const projects = [
  {
    title: "نظام إدارة الطلبات",
    description: "تطبيق أندرويد بلغة Java للتحكم في الطلبات.",
    github: "https://github.com/username/project1",
  },
  {
    title: "موقعي الشخصي",
    description: "تم تطويره باستخدام React و Tailwind CSS.",
    github: "https://github.com/username/personal-site",
  },
];

export default function Projects() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">مشاريعي</h2>
      <div className="grid gap-4">
        {projects.map((proj, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.github} target="_blank" className="text-blue-600">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}
