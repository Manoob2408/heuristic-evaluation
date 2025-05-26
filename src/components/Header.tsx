import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Sample dropdown data - you can customize these items
  const navigationItems = {
    "L'ESCOLA": [
      { title: "Presentació", href: "/escola/presentacio" },
      { title: "Història", href: "/escola/historia" },
      { title: "Organització", href: "/escola/organitzacio" },
      { title: "Direcció", href: "/escola/direccio" },
      { title: "Localització", href: "/escola/localitzacio" }
    ],
    "ESTUDIS": [
      { title: "Graus", href: "/estudis/graus" },
      { title: "Màsters", href: "/estudis/masters" },
      { title: "Doctorats", href: "/estudis/doctorats" },
      { title: "Formació Contínua", href: "/estudis/formacio-continua" },
      { title: "Erasmus", href: "/estudis/erasmus" }
    ],
    "RECERCA": [
      { title: "Grups de Recerca", href: "/recerca/grups" },
      { title: "Projectes", href: "/recerca/projectes" },
      { title: "Publicacions", href: "/recerca/publicacions" },
      { title: "Tesis", href: "/recerca/tesis" },
      { title: "Infraestructures", href: "/recerca/infraestructures" }
    ],
    "INTERNACIONAL": [
      { title: "Mobilitat Estudiantil", href: "/internacional/mobilitat" },
      { title: "Programes Internacionals", href: "/internacional/programes" },
      { title: "Convenis", href: "/internacional/convenis" },
      { title: "Erasmus+", href: "/internacional/erasmus" },
      { title: "Estudiants Internacionals", href: "/internacional/estudiants" }
    ],
    "OCUPABILITAT": [
      { title: "Borsa de Treball", href: "/ocupabilitat/borsa-treball" },
      { title: "Pràctiques", href: "/ocupabilitat/practiques" },
      { title: "Orientació Professional", href: "/ocupabilitat/orientacio" },
      { title: "Empreses Col·laboradores", href: "/ocupabilitat/empreses" },
      { title: "Alumni", href: "/ocupabilitat/alumni" }
    ]
  };

  // Information dropdown items
  const informationItems = [
    { title: "Estudiants", href: "/informacio/estudiants" },
    { title: "Professorat", href: "/informacio/professorat" },
    { title: "PAS", href: "/informacio/pas" },
    { title: "Empreses", href: "/informacio/empreses" },
    { title: "Famílies", href: "/informacio/families" },
    { title: "Mitjans de Comunicació", href: "/informacio/mitjans" }
  ];

  const handleMouseEnter = (item: string) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleClick = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className="w-full">
      {/* Top utilities bar */}
      <div className="bg-burgundy-dark text-white py-1 px-4 flex justify-end text-xs">
        <div className="flex space-x-3">
          <a href="#" className="hover:underline">EN</a>
          <a href="#" className="hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
          <a href="#" className="hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a href="#" className="hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Main header */}
      <div className="bg-burgundy text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <div className="logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="white"/>
              <path d="M20 10L30 20L20 30L10 20L20 10Z" fill="#7a0045"/>
            </svg>
          </div>
          <div>
            <div className="text-sm">Universitat de Lleida</div>
            <div className="text-xl font-bold">Escola Politècnica</div>
            <div className="text-sm">Superior</div>
          </div>
        </div>
        <div className="text-right hidden md:block">
          <div className="font-bold">INSPIRING THE FUTURE</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black text-white relative">
        <div className="container mx-auto flex flex-wrap">
          <ul className="flex flex-wrap text-sm">
            {Object.keys(navigationItems).map((item) => (
              <li 
                key={item}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleClick(item)}
                  className="flex items-center px-4 py-3 hover:bg-burgundy transition-colors"
                >
                  {item}
                  <ChevronDown 
                    className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                      activeDropdown === item ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item && (
                  <div className="absolute top-full left-0 bg-white text-black shadow-lg border border-gray-200 min-w-64 z-50">
                    <ul className="py-2">
                      {navigationItems[item as keyof typeof navigationItems].map((subItem, index) => (
                        <li key={index}>
                          <Link
                            to={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="ml-auto relative">
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('INFORMACIO')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleClick('INFORMACIO')}
                className="flex items-center px-4 py-3 hover:bg-burgundy transition-colors"
              >
                <span>INFORMACIÓ PER A...</span>
                <ChevronDown 
                  className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'INFORMACIO' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Information Dropdown Menu */}
              {activeDropdown === 'INFORMACIO' && (
                <div className="absolute top-full right-0 bg-white text-black shadow-lg border border-gray-200 min-w-64 z-50">
                  <ul className="py-2">
                    {informationItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;