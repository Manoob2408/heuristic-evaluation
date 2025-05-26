import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left column - News */}
      <div className="w-full md:w-1/2 lg:w-3/5">
        <div className="border-l-4 border-university-burgundy pl-4 mb-6">
          <h2 className="text-2xl text-gray-700 font-medium">Notícies</h2>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <a href="#" className="text-sm text-orange-600 hover:underline flex items-center gap-1">
            <span>RSS notícies</span>
            <span>📡</span>
          </a>
        </div>
        
        {/* News items would go here */}
        <div className="border-t border-gray-200 pt-4 mt-2">
          <div className="bg-gray-100 p-4 mb-4">
            <p className="text-gray-600 mb-2">Sample news article placeholder</p>
          </div>
          <div className="bg-gray-100 p-4 mb-4">
            <p className="text-gray-600 mb-2">Sample news article placeholder</p>
          </div>
        </div>
      </div>
      
      {/* Right column - Agenda */}
      <div className="w-full md:w-1/2 lg:w-2/5">
        <div className="border-l-4 border-university-burgundy pl-4 mb-6">
          <h2 className="text-2xl text-gray-700 font-medium">Agenda activitats EPS</h2>
        </div>
        
        {/* Agenda items would go here */}
        <div className="border-t border-gray-200 pt-4 mt-2">
          <div className="bg-gray-100 p-4 mb-4">
            <p className="text-gray-600 mb-2">Sample agenda item placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;