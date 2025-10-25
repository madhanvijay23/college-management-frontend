// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Home, Users, BookOpen, UserCircle, Menu, X, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Students', path: '/students' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-gradient-to-b from-indigo-800 to-indigo-900 text-white transition-all duration-300 flex flex-col min-h-screen`}
    >
      <div className="p-6 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8" />
            <span className="text-xl font-bold">CMS</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-indigo-700 rounded-lg transition"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition ${
              isActive(item.path)
                ? 'bg-indigo-700 text-white'
                : 'text-indigo-200 hover:bg-indigo-700/50'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;