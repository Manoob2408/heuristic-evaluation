
import React from 'react';
import { Calendar, BookOpen, Award, Building, Rocket, Users, Check } from 'lucide-react';

const Sidebar = () => {
  const sidebarLinks = [
    { title: 'HORARIS CLASSE', color: 'bg-yellow-400', icon: <Calendar className="text-xl" /> },
    { title: 'CALENDARIS EXÀMENS', color: 'bg-orange-400', icon: <BookOpen className="text-xl" /> },
    { title: 'AJUTS I BEQUES', color: 'bg-red-500', icon: <Award className="text-xl" /> },
    { title: 'CAMPUS IGUALADA', color: 'bg-red-600', icon: <Building className="text-xl" /> },
    { title: 'VOCACIONS STEAM', color: 'bg-burgundy-dark', icon: <Rocket className="text-xl" /> },
    { title: 'COMUNITAT EPS', color: 'bg-green-500', icon: <Users className="text-xl" /> },
    { title: 'ENQUESTES ASSIGNATURA / PROFESSORAT', color: 'bg-blue-500', icon: <Check className="text-xl" /> },
    { title: 'SISTEMA DE GARANTIA INTERNA DE LA QUALITAT SIGQ', color: 'bg-teal-500', icon: <Check className="text-xl" /> },
  ];

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto">
        <div className="bg-gray-100 p-4 mb-4">
          <h2 className="font-medium text-xl mb-4">Destacats</h2>
          
          <div className="grid grid-cols-1 gap-2">
            {sidebarLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className={`${link.color} flex items-center gap-3 w-full text-white py-3 px-4 font-medium rounded hover:brightness-105 transition-all duration-200`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-6 border-l-4 border-burgundy pl-4">
          <h3 className="font-bold mb-2">Altres activitats i informacions d'interès</h3>
          <div className="space-y-4 text-sm">
            <p>Ahir participi (youtuber Carola y Río A través de Juan Carlos Moreno Borallo), format en Gaming i videojocs, explicarà el RolePlay.</p>
            <p>Gold primavera 2023 (Oficina a PM): El més guanyid: un la participació en Robótica</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;