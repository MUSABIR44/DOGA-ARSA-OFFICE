import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Tag, Expand } from 'lucide-react';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(price);
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/portfoy/${property.id}`} className="relative block">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-56 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {property.isNew && (
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
              YENİ
            </span>
          )}
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
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/portfoy/${property.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition">
            {property.title}
          </h3>
        </Link>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={16} className="text-primary mr-1" />
          <span>{property.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
          {property.description}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm">
            <Expand size={16} className="text-primary mr-1" />
            <span>{property.area} m²</span>
          </div>
          
          <div className="text-primary font-bold">
            {formatPrice(property.price)}
          </div>
        </div>

        <Link 
          to={`/portfoy/${property.id}`} 
          className="mt-4 w-full btn btn-outline text-sm"
        >
          Detayları Görüntüle
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;