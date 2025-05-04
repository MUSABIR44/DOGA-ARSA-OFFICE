import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MapPin, Home, Tag, Phone, MessageCircle, Expand, Info, Clock, Share2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PropertyCard from '../components/ui/PropertyCard';
import properties from '../data/properties';
import { PHONE_NUMBER, WHATSAPP_URL } from '../utils/constants';
import { Property } from '../types';

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(price);
};

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the property
    const found = properties.find(p => p.id === id);
    
    if (found) {
      setProperty(found);
      document.title = `${found.title} | DOĞA ARSA OFİSİ`;
      
      // Find similar properties
      const similar = properties
        .filter(p => p.id !== id && p.type === found.type)
        .slice(0, 3);
      
      setSimilarProperties(similar);
    } else {
      // Handle not found
      document.title = 'Gayrimenkul Bulunamadı | DOĞA ARSA OFİSİ';
    }
  }, [id]);

  if (!property) {
    return (
      <div className="pt-40 pb-20">
        <div className="container">
          <div className="text-center py-16 bg-gray-100 rounded-lg">
            <Info size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Gayrimenkul Bulunamadı</h2>
            <p className="text-gray-600 mb-6">Aradığınız gayrimenkul portföyümüzde bulunamadı veya kaldırılmış olabilir.</p>
            <Link to="/portfoy" className="btn btn-primary">
              Portföye Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary">Ana Sayfa</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/portfoy" className="text-gray-500 hover:text-primary">Portföy</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary">{property.title}</span>
        </nav>
        
        {/* Property Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {property.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={18} className="text-primary mr-1" />
              <span>{property.location}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                property.type === 'arsa' ? 'bg-blue-500 text-white' :
                property.type === 'arazi' ? 'bg-green-600 text-white' :
                property.type === 'villa' ? 'bg-purple-500 text-white' :
                property.type === 'tarla' ? 'bg-amber-500 text-white' :
                'bg-red-500 text-white'
              }`}>
                {property.type === 'arsa' ? 'ARSA' :
                 property.type === 'arazi' ? 'ARAZİ' :
                 property.type === 'villa' ? 'VİLLA' :
                 property.type === 'tarla' ? 'TARLA' :
                 'TİCARİ'}
              </span>
              
              {property.isNew && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  YENİ
                </span>
              )}
            </div>
          </div>
          
          <div className="mt-4 lg:mt-0 text-right">
            <p className="text-sm text-gray-500 mb-1">İlan Tarihi: {formatDate(property.createdAt)}</p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {formatPrice(property.price)}
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="rounded-lg overflow-hidden"
              >
                {property.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img 
                      src={image} 
                      alt={`${property.title} - Görsel ${i + 1}`} 
                      className="w-full h-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center">
                <Expand size={24} className="text-primary mb-2" />
                <h3 className="font-semibold text-gray-900">Alan</h3>
                <p className="text-gray-600">{property.area} m²</p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center">
                <Home size={24} className="text-primary mb-2" />
                <h3 className="font-semibold text-gray-900">Tip</h3>
                <p className="text-gray-600">
                  {property.type === 'arsa' ? 'Arsa' :
                   property.type === 'arazi' ? 'Arazi' :
                   property.type === 'villa' ? 'Villa' :
                   property.type === 'tarla' ? 'Tarla' :
                   'Ticari'}
                </p>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center">
                <MapPin size={24} className="text-primary mb-2" />
                <h3 className="font-semibold text-gray-900">Şehir</h3>
                <p className="text-gray-600">{property.city}</p>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Detaylar</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {property.description}
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Özellikler</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Share */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Share2 size={18} className="mr-2" />
                Bu İlanı Paylaş
              </h3>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="bg-[#3b5998] text-white p-2 rounded-full"
                  aria-label="Facebook'ta Paylaş"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-[#1da1f2] text-white p-2 rounded-full"
                  aria-label="Twitter'da Paylaş"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-[#25d366] text-white p-2 rounded-full"
                  aria-label="WhatsApp'ta Paylaş"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-[#0e76a8] text-white p-2 rounded-full"
                  aria-label="LinkedIn'de Paylaş"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-[#db4437] text-white p-2 rounded-full"
                  aria-label="E-posta ile Paylaş"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Benzer Gayrimenkuller</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {similarProperties.map(prop => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Right Column - Contact and Agent */}
          <div className="lg:col-span-1">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Info size={18} className="text-primary mr-2" />
                Daha Fazla Bilgi İçin
              </h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${PHONE_NUMBER}`} 
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  {PHONE_NUMBER}
                </a>
                
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center"
                >
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp ile İletişim
                </a>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2 flex items-center">
                  <Clock size={16} className="mr-2 text-primary" />
                  <span>İlan No: {property.id}</span>
                </p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Clock size={16} className="mr-2 text-primary" />
                  <span>Eklenme Tarihi: {formatDate(property.createdAt)}</span>
                </p>
              </div>
            </div>
            
            {/* Agent Info */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Zeynep Kaya" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Zeynep Kaya</h3>
                  <p className="text-primary text-sm">Gayrimenkul Danışmanı</p>
                </div>
              </div>
              
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="btn btn-outline w-full mb-3 flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Ara
              </a>
              
              <Link 
                to="/iletisim" 
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 w-full flex items-center justify-center"
              >
                <MessageCircle size={18} className="mr-2" />
                Mesaj Gönder
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;