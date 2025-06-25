
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">زهرة سليمان</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">الرئيسية</Link>
        <Link to="/about" className="hover:text-blue-600">من أنا</Link>
        <Link to="/resume" className="hover:text-blue-600">السيرة</Link>
        <Link to="/projects" className="hover:text-blue-600">المشاريع</Link>
        <Link to="/contact" className="hover:text-blue-600">التواصل</Link>
      </div>
    </nav>
  );
}
