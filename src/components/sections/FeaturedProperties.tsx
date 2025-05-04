import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import properties from '../../data/properties';
import PropertyCard from '../ui/PropertyCard';
import SectionHeader from '../ui/SectionHeader';
import { PROPERTY_TYPES } from '../../utils/constants';

const FeaturedProperties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const featuredProperties = properties.filter(property => property.isFeatured);
  
  const filteredProperties = activeFilter === 'all' 
    ? featuredProperties 
    : featuredProperties.filter(property => property.type === activeFilter);

  return (
    <section id="featured-properties" className="py-20 bg-gray-50">
      <div className="container">
        <SectionHeader 
          title="Öne Çıkan Gayrimenkuller" 
          subtitle="Sizin için seçtiğimiz en iyi yatırım fırsatları"
          alignment="center"
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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
        
        {/* Properties Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">Bu kategoride henüz gayrimenkul bulunmamaktadır.</p>
          </div>
        )}
        
        <div className="text-center mt-10">
          <Link to="/portfoy" className="btn btn-primary">
            Tüm Portföyümüzü Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;