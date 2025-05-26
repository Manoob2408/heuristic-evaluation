import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar } from './ui/calendar';

const newsItems = [
  {
    id: 1,
    date: 'dijous, 01 de març de 2023',
    title: 'Un equip de l\'escola Vedruna de Sant Sadurní guanya la First Lego League celebrada dissabte al Campus Igualada-UdL',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 2,
    date: 'dimecres, 22 de febrer de 2023',
    title: 'Magda Valls a l\'exposició "Dones que van canviar el món" a l\'Institut Joan Solà',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
  }
];

const NewsSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      console.log('Selected date:', date.toLocaleDateString());
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="flex items-center justify-between border-b-2 border-burgundy mb-4 pb-2">
            <h2 className="text-xl font-bold">Notícies</h2>
            <a href="#" className="text-sm text-gray-500">RSS notícies</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((news) => (
              <div key={news.id} className="flex flex-col">
                <div className="h-48 overflow-hidden mb-2">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                <h3 className="font-medium hover:text-burgundy cursor-pointer">{news.title}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="col-span-1">
          <div className="flex items-center justify-between border-b-2 border-burgundy mb-4 pb-2">
            <h2 className="text-xl font-bold">Agenda activitats EPS</h2>
            <a href="#" className="text-sm text-gray-500">RSS esdeveniments</a>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden min-w-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="rounded-none border-0 w-full max-w-none"
            />
          </div>
          
          <div className="mt-6">
            <h3 className="font-bold mb-2">PROPERS ESDEVENIMENTS</h3>
            <div className="border-l-4 border-burgundy pl-4 py-1 mb-3">
              <p className="text-sm">8 de març: Dia Internacional de les Dones</p>
              <a href="#" className="text-xs text-burgundy hover:underline">#Fem Tech Girls</a>
            </div>
            {selectedDate && (
              <div className="border-l-4 border-green-500 pl-4 py-1 mb-3">
                <p className="text-sm">Data seleccionada: {selectedDate.toLocaleDateString('ca-ES')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;