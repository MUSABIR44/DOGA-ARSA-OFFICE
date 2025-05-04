import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '../ui/Logo';
import { 
  NAVIGATION, 
  PHONE_NUMBER, 
  EMAIL, 
  OFFICE_ADDRESS, 
  WORKING_HOURS,
  SOCIAL_MEDIA
} from '../../utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="text-gray-400 mb-6">
              DOĞA ARSA OFİSİ olarak arsa, arazi, villa ve tarla yatırımlarınızda güvenilir ve profesyonel 
              danışmanlık hizmeti sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_MEDIA.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_MEDIA.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={SOCIAL_MEDIA.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-primary/20 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Hızlı Bağlantılar
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary mt-2"></span>
            </h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              İletişim Bilgileri
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-3 mt-1" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-gray-400 hover:text-primary transition">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-3 mt-1" />
                <a href={`mailto:${EMAIL}`} className="text-gray-400 hover:text-primary transition">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-1" />
                <span className="text-gray-400">
                  {OFFICE_ADDRESS}
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mr-3 mt-1" />
                <span className="text-gray-400">
                  {WORKING_HOURS}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Bültene Abone Olun
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary mt-2"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Güncel arsa fırsatları ve yatırım tavsiyeleri için bültenimize abone olun.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary w-full"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 py-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} DOĞA ARSA OFİSİ. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;