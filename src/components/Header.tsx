
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
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
      <nav className="bg-black text-white">
        <div className="container mx-auto flex flex-wrap">
          <ul className="flex flex-wrap text-sm">
            <li className="relative group">
              <a href="#" className="block px-4 py-3 hover:bg-burgundy transition-colors">L'ESCOLA</a>
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-3 hover:bg-burgundy transition-colors">ESTUDIS</a>
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-3 hover:bg-burgundy transition-colors">RECERCA</a>
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-3 hover:bg-burgundy transition-colors">INTERNACIONAL</a>
            </li>
            <li className="relative group">
              <a href="#" className="block px-4 py-3 hover:bg-burgundy transition-colors">OCUPABILITAT</a>
            </li>
          </ul>
          <div className="ml-auto">
            <a href="#" className="flex items-center px-4 py-3 hover:bg-burgundy transition-colors">
              <span>INFORMACIÓ PER A...</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;