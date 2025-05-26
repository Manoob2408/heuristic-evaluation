import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80',
      title: 'Estudis EPS al Campus Igualada',
      description: 'Grau en Enginyeria en Organització Industrial i Logística, Grau en Enginyeria Química, Grau en Enginyeria Informàtica, Doble Grau en Enginyeria en Organització Industrial i Logística / ADE i Màster en Enginyeria del Cuir',
      buttonText: 'CONEIX EL CAMPUS IGUALADA - UDL'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Laboratoris d\'Enginyeria Avançada',
      description: 'Descobreix els nostres laboratoris equipats amb la darrera tecnologia per a la formació pràctica en enginyeria informàtica, química i industrial. Espais dissenyats per fomentar la innovació i la recerca.',
      buttonText: 'VISITA ELS NOSTRES LABORATORIS'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Recerca i Innovació Tecnològica',
      description: 'Els nostres estudiants i professors desenvolupen projectes de recerca punters en àrees com la intel·ligència artificial, la sostenibilitat industrial i les tecnologies emergents.',
      buttonText: 'DESCOBREIX LA NOSTRA RECERCA'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      title: 'Vida Universitària i Comunitat',
      description: 'Forma part d\'una comunitat dinàmica d\'estudiants i professors. Participa en activitats extracurriculars, projectes col·laboratius i esdeveniments que enriqueixen la teva experiència universitària.',
      buttonText: 'UNEIX-TE A LA COMUNITAT EPS'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      title: 'Sortides Professionals i Èxit Laboral',
      description: 'Els nostres graduats treballen en empreses líders del sector tecnològic i industrial. Oferim programes de pràctiques, mentoria professional i connexions directes amb el món empresarial.',
      buttonText: 'EXPLORA LES SORTIDES PROFESSIONALS'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Campus image with smooth transition */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url('${currentSlideData.image}')` }}
      ></div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
        <div className="transition-all duration-500 ease-in-out">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentSlideData.title}</h1>
          <p className="text-sm md:text-base mb-4 max-w-4xl">
            {currentSlideData.description}
          </p>
          <button className="bg-burgundy hover:bg-burgundy-light flex items-center space-x-2 px-4 py-2 transition-colors">
            <span>{currentSlideData.buttonText}</span>
          </button>
        </div>
      </div>
      
      {/* Slideshow navigation */}
      <div className="absolute bottom-4 right-4 flex space-x-1 z-20">
        <button 
          onClick={prevSlide}
          className="w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroSection;