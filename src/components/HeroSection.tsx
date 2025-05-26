
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Campus image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80')` }}
      ></div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Estudis EPS al Campus Igualada</h1>
        <p className="text-sm md:text-base mb-4">
          Grau en Enginyeria en Organització Industrial i Logística, Grau en Enginyeria Química, Grau en Enginyeria Informàtica, Doble Grau en Enginyeria en Organització Industrial i Logística / ADE i Màster en Enginyeria del Cuir
        </p>
        <button className="bg-burgundy hover:bg-burgundy-light flex items-center space-x-2 px-4 py-2 transition-colors">
          <span>CONEIX EL CAMPUS IGUALADA - UDL</span>
        </button>
      </div>
      
      {/* Slideshow navigation */}
      <div className="absolute bottom-4 right-4 flex space-x-1 z-20">
        <button className="w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black text-white transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black text-white transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;