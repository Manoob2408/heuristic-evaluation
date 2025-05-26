import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md p-6">
          <div className="inline-block p-4 bg-burgundy text-white text-5xl font-bold rounded-lg mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-burgundy mb-4">Pàgina no trobada</h1>
          <p className="text-gray-600 mb-6">
            La pàgina que esteu cercant no existeix o ha estat moguda.
          </p>
          <a
            href="/"
            className="bg-burgundy text-white px-6 py-3 rounded hover:bg-burgundy-light transition-colors"
          >
            Tornar a l'inici
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;