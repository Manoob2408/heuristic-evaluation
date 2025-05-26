import React, { useState } from 'react';
import { Calendar, BookOpen, Award, Building, Rocket, Users, Check, ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const sidebarLinks = [
    { 
      title: 'HORARIS CLASSE', 
      color: 'bg-yellow-400', 
      icon: <Calendar className="text-xl" />,
      items: [
        'Horaris Grau en Enginyeria Informàtica',
        'Horaris Grau en Enginyeria de Sistemes TIC',
        'Horaris Grau en Enginyeria Electrònica',
        'Horaris Màster Universitari',
        'Horaris Curs d\'Adaptació'
      ]
    },
    { 
      title: 'CALENDARIS EXÀMENS', 
      color: 'bg-orange-400', 
      icon: <BookOpen className="text-xl" />,
      items: [
        'Calendari Primera Convocatòria',
        'Calendari Segona Convocatòria',
        'Calendari Tercera Convocatòria',
        'Calendari Exàmens Finals',
        'Calendari Projectes de Fi de Grau'
      ]
    },
    { 
      title: 'AJUTS I BEQUES', 
      color: 'bg-red-500', 
      icon: <Award className="text-xl" />,
      items: [
        'Beques Generalitat de Catalunya',
        'Beques Ministeri d\'Educació',
        'Ajuts d\'Emergència Social',
        'Beques de Col·laboració',
        'Programa Erasmus+',
        'Ajuts per a Material Docent'
      ]
    },
    { 
      title: 'CAMPUS IGUALADA', 
      color: 'bg-red-600', 
      icon: <Building className="text-xl" />,
      items: [
        'Mapa del Campus',
        'Serveis del Campus',
        'Biblioteca Campus Igualada',
        'Restaurants i Cafeteries',
        'Transport Públic',
        'Allotjament Estudiantil'
      ]
    },
    { 
      title: 'VOCACIONS STEAM', 
      color: 'bg-burgundy-dark', 
      icon: <Rocket className="text-xl" />,
      items: [
        'Programes d\'Orientació',
        'Tallers per a Instituts',
        'Concursos de Robòtica',
        'Jornades Tecnològiques',
        'Campus d\'Estiu STEAM'
      ]
    },
    { 
      title: 'COMUNITAT EPS', 
      color: 'bg-green-500', 
      icon: <Users className="text-xl" />,
      items: [
        'Associació d\'Estudiants',
        'Alumni EPS',
        'Col·legi Professional',
        'Fòrum d\'Empreses',
        'Activitats Extracurriculars',
        'Voluntariat Tecnològic'
      ]
    },
    { 
      title: 'ENQUESTES ASSIGNATURA / PROFESSORAT', 
      color: 'bg-blue-500', 
      icon: <Check className="text-xl" />,
      items: [
        'Enquesta Docència',
        'Enquesta Assignatures',
        'Avaluació Professorat',
        'Suggeriments Millora',
        'Resultats Enquestes'
      ]
    },
    { 
      title: 'SISTEMA DE GARANTIA INTERNA DE LA QUALITAT SIGQ', 
      color: 'bg-teal-500', 
      icon: <Check className="text-xl" />,
      items: [
        'Manual de Qualitat',
        'Procediments SIGQ',
        'Indicadors de Qualitat',
        'Informes d\'Avaluació',
        'Plans de Millora',
        'Auditories Internes'
      ]
    },
  ];

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto">
        <div className="bg-gray-100 p-4 mb-4">
          <h2 className="font-medium text-xl mb-4">Destacats</h2>
          
          <div className="grid grid-cols-1 gap-2">
            {sidebarLinks.map((link, index) => (
              <div key={index} className="relative">
                <button 
                  onClick={() => handleDropdownToggle(index)}
                  className={`${link.color} flex items-center justify-between w-full text-white py-3 px-4 font-medium rounded hover:brightness-105 transition-all duration-200`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm text-left">{link.title}</span>
                  </div>
                  <span className="text-sm">
                    {openDropdown === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                
                {openDropdown === index && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b shadow-lg z-10 max-h-60 overflow-y-auto">
                    {link.items.map((item, itemIndex) => (
                      <a
                        key={itemIndex}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`Clicked: ${link.title} - ${item}`);
                          // Here you can add navigation logic
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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