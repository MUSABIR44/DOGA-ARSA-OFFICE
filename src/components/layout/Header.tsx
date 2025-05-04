import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MapPin, Phone, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import { NAVIGATION, PHONE_NUMBER, OFFICE_ADDRESS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'header-scrolled py-2' : 'bg-transparent py-4'
      }`}
    >
      {/* Top bar with contact info */}
      <div className={`bg-primary text-white transition-all ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="container py-2 flex justify-between items-center text-sm">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span className="hidden md:inline">{OFFICE_ADDRESS}</span>
            <span className="md:hidden">Beylikdüzü / İstanbul</span>
          </div>
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center hover:underline">
            <Phone size={16} className="mr-1" />
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-50">
            <Logo className={isScrolled ? 'text-primary' : 'text-white'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium text-lg hover:text-primary transition ${
                        isScrolled 
                          ? isActive ? 'text-primary' : 'text-gray-800' 
                          : isActive ? 'text-primary-light' : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={28} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="container h-full flex flex-col pt-24 pb-8">
            <nav className="flex-grow">
              <ul className="flex flex-col space-y-6 items-center text-xl">
                {NAVIGATION.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium hover:text-primary transition ${
                          isActive ? 'text-primary' : 'text-gray-800'
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto text-center">
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="btn btn-primary w-full mb-4"
              >
                <Phone size={18} className="mr-2" />
                {PHONE_NUMBER}
              </a>
              <p className="text-sm text-gray-600">
                {OFFICE_ADDRESS}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;