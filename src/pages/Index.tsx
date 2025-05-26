
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          <div className="lg:col-span-2">
            <NewsSection />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;