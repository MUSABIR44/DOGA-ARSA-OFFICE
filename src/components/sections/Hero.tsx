import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../../utils/constants';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center">
        <div className="container mt-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              DOĞA ARSA OFİSİ
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              Yatırımlarınıza Değer Katacak Gayrimenkul Fırsatları
            </p>
            <p className="text-lg mb-10 text-gray-200 animate-fade-in-delay-2">
              Arsa, arazi, villa ve tarla yatırımlarınız için uzman danışmanlık hizmeti sunuyoruz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <Link to="/portfoy" className="btn btn-primary">
                <MapPin size={18} className="mr-2" />
                Portföyümüzü Keşfedin
              </Link>
              
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                <Phone size={18} className="mr-2" />
                Hemen Arayın
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a 
        href="#featured-properties" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </a>
    </section>
  );
};

export default Hero;