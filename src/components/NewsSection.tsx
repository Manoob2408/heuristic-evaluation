import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Rss } from 'lucide-react';
import { Calendar as CalendarComponent } from './ui/calendar';
import { useNavigate } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    date: 'divendres, 24 de maig de 2025',
    dateObj: new Date(2025, 4, 24), // maio é mês 4 (0-indexado)
    title: 'Nova convocatòria de beques d\'excel·lència acadèmica per al curs 2025-2026',
    excerpt: 'L\'Escola Politècnica Superior obre una nova convocatòria de beques destinades als estudiants amb millor expedient acadèmic.',
    category: 'Beques',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    date: 'dijous, 23 de maig de 2025',
    dateObj: new Date(2025, 4, 23),
    title: 'Inauguració del nou laboratori d\'Intel·ligència Artificial i Robòtica',
    excerpt: 'Demà dimecres s\'inaugurarà el nou laboratori equipat amb la tecnologia més avançada per a la recerca en IA.',
    category: 'Infraestructures',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    date: 'dimecres, 22 de maig de 2025',
    dateObj: new Date(2025, 4, 22),
    title: 'Jornada de Portes Obertes: Descobreix els nostres graus d\'enginyeria',
    excerpt: 'El proper 25 de maig celebrem la Jornada de Portes Obertes per mostrar les nostres titulacions als futurs estudiants.',
    category: 'Esdeveniments',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    date: 'dimarts, 21 de maig de 2025',
    dateObj: new Date(2025, 4, 21),
    title: 'Estudiants de l\'EPS guanyen el primer premi en el concurs d\'innovació tecnològica',
    excerpt: 'Un equip format per estudiants de Grau en Enginyeria Informàtica ha resultat guanyador del concurs nacional.',
    category: 'Premis',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    date: 'dilluns, 20 de maig de 2025',
    dateObj: new Date(2025, 4, 20),
    title: 'Nou conveni de col·laboració amb empreses tecnològiques per a pràctiques',
    excerpt: 'L\'EPS signa acords amb més de 20 empreses del sector tecnològic per oferir oportunitats de pràctiques.',
    category: 'Convenis',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    date: 'dissabte, 18 de maig de 2025',
    dateObj: new Date(2025, 4, 18),
    title: 'Conferència magistral sobre sostenibilitat en l\'enginyeria',
    excerpt: 'El reconegut expert internacional Dr. Martinez oferirà una conferència sobre els reptes mediambientals.',
    category: 'Conferències',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Workshop: Introducció a la Programació Quàntica",
    date: "26 de maig de 2025",
    dateObj: new Date(2025, 4, 26),
    time: "10:00 - 12:00",
    location: "Aula Magna",
    type: "Workshop"
  },
  {
    id: 2,
    title: "Defensa de Tesi Doctoral - Maria González",
    date: "28 de maig de 2025",
    dateObj: new Date(2025, 4, 28),
    time: "16:00 - 18:00",
    location: "Sala de Graus",
    type: "Tesi"
  },
  {
    id: 3,
    title: "Seminari: Futures Tecnologies en Energia Renovable",
    date: "30 de maig de 2025",
    dateObj: new Date(2025, 4, 30),
    time: "09:30 - 11:30",
    location: "Laboratori 3",
    type: "Seminari"
  },
  {
    id: 4,
    title: "Jornada de Networking amb Alumni",
    date: "3 de juny de 2025",
    dateObj: new Date(2025, 5, 3),
    time: "18:00 - 21:00",
    location: "Saló d'Actes",
    type: "Networking"
  },
  {
    id: 5,
    title: "Dia Internacional de les Dones",
    date: "8 de març de 2026",
    dateObj: new Date(2026, 2, 8),
    time: "Tot el dia",
    location: "Campus EPS",
    type: "Commemoració",
    hashtag: "#FemTechGirls"
  }
];

const NewsSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      console.log('Selected date:', date.toLocaleDateString());
    }
  };

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  // Função para filtrar eventos baseado na data selecionada
  const getFilteredEvents = () => {
    if (!selectedDate) {
      return upcomingEvents;
    }
    
    // Normalizar a data selecionada para comparação (início do dia)
    const selectedDateStart = new Date(selectedDate);
    selectedDateStart.setHours(0, 0, 0, 0);
    
    return upcomingEvents.filter(event => {
      const eventDate = new Date(event.dateObj);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= selectedDateStart;
    });
  };

  const filteredEvents = getFilteredEvents();

  const getCurrentPageItems = () => {
    const start = currentPage * itemsPerPage;
    return newsItems.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Beques': 'bg-blue-100 text-blue-800',
      'Infraestructures': 'bg-green-100 text-green-800',
      'Esdeveniments': 'bg-purple-100 text-purple-800',
      'Premis': 'bg-yellow-100 text-yellow-800',
      'Convenis': 'bg-red-100 text-red-800',
      'Conferències': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Workshop': 'border-blue-500',
      'Tesi': 'border-green-500',
      'Seminari': 'border-purple-500',
      'Networking': 'border-orange-500',
      'Commemoració': 'border-red-500'
    };
    return colors[type] || 'border-gray-500';
  };

  return (
    <div className="bg-white p-4 lg:p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between border-b-2 border-burgundy mb-6 pb-2">
              <h2 className="text-2xl font-bold text-gray-800">Notícies</h2>
              <div className="flex items-center gap-4">
                <a href="#" className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors">
                  <Rss className="w-4 h-4" />
                  RSS notícies
                </a>
                {totalPages > 1 && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevPage}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      disabled={currentPage === 0}
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <span className="text-sm text-gray-600">
                      {currentPage + 1} / {totalPages}
                    </span>
                    <button
                      onClick={nextPage}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                      disabled={currentPage === totalPages - 1}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {newsItems.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  No hi ha notícies disponibles.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getCurrentPageItems().map((news) => (
                  <article 
                    key={news.id} 
                    className="group cursor-pointer"
                    onClick={() => handleNewsClick(news.id)}
                  >
                    <div className="relative h-48 mb-3 overflow-hidden rounded-lg">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {news.date}
                      </p>
                      <h3 className="font-semibold text-gray-900 group-hover:text-burgundy transition-colors leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {news.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
          
          {/* Agenda Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-between border-b-2 border-burgundy mb-6 pb-2">
              <h2 className="text-2xl font-bold text-gray-800">Agenda activitats EPS</h2>
              <a href="#" className="text-sm text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors">
                <Rss className="w-4 h-4" />
                RSS esdeveniments
              </a>
            </div>
            
            {/* Calendar */}
            <div className="bg-white rounded-lg overflow-hidden mb-6 border border-gray-200">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="rounded-none border-0 w-full"
              />
            </div>
            
            {/* Upcoming Events */}
            <div>
              <h3 className="font-bold mb-4 text-gray-800 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                PROPERS ESDEVENIMENTS
                {selectedDate && (
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    (des de {selectedDate.toLocaleDateString('ca-ES')})
                  </span>
                )}
              </h3>
              
              {filteredEvents.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600 text-sm">
                    No hi ha esdeveniments disponibles per a la data seleccionada o posteriors.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className={`border-l-4 ${getEventTypeColor(event.type)} pl-4 py-2 bg-gray-50 rounded-r-lg`}>
                      <div className="space-y-1">
                        <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </p>
                          <p className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </p>
                          <p className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </p>
                          {event.hashtag && (
                            <a href="#" className="text-burgundy hover:underline font-medium">
                              {event.hashtag}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {selectedDate && (
                <div className="border-l-4 border-green-500 pl-4 py-2 mt-4 bg-green-50 rounded-r-lg">
                  <p className="text-sm font-medium text-green-800">
                    Data seleccionada: {selectedDate.toLocaleDateString('ca-ES')}
                  </p>
                  <p className="text-xs text-green-700 mt-1">
                    Mostrant {filteredEvents.length} esdeveniment{filteredEvents.length !== 1 ? 's' : ''} 
                    {filteredEvents.length > 0 ? ' d\'aquesta data endavant' : ''}
                  </p>
                </div>
              )}
              
              <div className="mt-6">
                <a href="#" className="block text-center bg-burgundy text-white py-3 px-4 rounded-lg hover:bg-burgundy-dark transition-colors font-medium">
                  Veure tots els esdeveniments
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;