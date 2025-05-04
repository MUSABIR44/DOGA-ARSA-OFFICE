import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  alignment = 'left',
  light = false 
}) => {
  return (
    <div className={`mb-10 ${alignment === 'center' ? 'text-center' : ''}`}>
      <h2 className={`section-title ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-gray-200' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-24 bg-primary mt-4 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;