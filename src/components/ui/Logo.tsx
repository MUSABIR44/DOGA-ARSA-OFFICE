import React from 'react';
import { Sprout } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Sprout className="w-8 h-8 text-primary mr-2" />
      <div>
        <h1 className="font-poppins font-bold text-xl">DOĞA ARSA</h1>
        <p className="text-xs font-medium tracking-wider -mt-1">OFİSİ</p>
      </div>
    </div>
  );
};

export default Logo;