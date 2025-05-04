import React, { useState, useEffect } from 'react';
import { Search, MapPin } from 'lucide-react';
import PropertyCard from '../components/ui/PropertyCard';
import SectionHeader from '../components/ui/SectionHeader';
import properties from '../data/properties';
import { PROPERTY_TYPES } from '../utils/constants';
import { Property } from '../types';

const PortfolioPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  useEffect(() => {
    document.title = 'Portföy | DOĞA ARSA OFİSİ';
    window.scrollTo(0, 0);
    
    // Extract unique cities
    const uniqueCities = Array.from(new Set(properties.map(p => p.city)));
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    // Apply filters
    let result = properties;
    
    // Type filter
    if (activeFilter !== 'all') {
      result = result.filter(property => property.type === activeFilter);
    }
    
    // City filter
    if (selectedCity) {
      result = result.filter(property => property.city === selectedCity);
    }
    
    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        property => 
          property.title.toLowerCase().includes(term) || 
          property.description.toLowerCase().includes(term) || 
          property.location.toLowerCase().includes(term)
      );
    }
    
    setFilteredProperties(result);
  }, [activeFilter, searchTerm, selectedCity]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-about-pattern bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Portföyümüz
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                Arsa, arazi, villa ve daha fazlası
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader 
            title="Gayrimenkul Portföyümüz" 
            subtitle="Size özel seçilmiş gayrimenkul fırsatları"
          />
          
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch mb-6">
              {/* Search */}
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Arama yapın..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
                <Search size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              </div>
              
              {/* City Filter */}
              <div className="lg:w-1/4">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="input-field"
                >
                  <option value="">Tüm İller</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Type Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-full transition ${
                  activeFilter === 'all' ? 'filter-active' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setActiveFilter('all')}
              >
                Tümü
              </button>
              
              {PROPERTY_TYPES.map(type => (
                <button
                  key={type.id}
                  className={`px-4 py-2 rounded-full transition ${
                    activeFilter === type.id ? 'filter-active' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveFilter(type.id)}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-100 rounded-lg">
              <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aramanıza uygun gayrimenkul bulunamadı</h3>
              <p className="text-gray-600 mb-4">Lütfen farklı arama kriterleri deneyin veya filtreleri temizleyin.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('all');
                  setSelectedCity('');
                }}
                className="btn btn-primary"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;