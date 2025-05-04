import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { 
  PHONE_NUMBER, 
  EMAIL, 
  OFFICE_ADDRESS, 
  WORKING_HOURS 
} from '../../utils/constants';

const ContactPreview: React.FC = () => {
  return (
    <section className="py-20 bg-about-pattern bg-fixed bg-cover bg-center">
      <div className="bg-black/70 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Profesyonel Danışmanlık Hizmeti İçin Bize Ulaşın
            </h2>
            
            <p className="text-lg text-gray-300 mb-10">
              Arsa, arazi, villa ve tarla yatırımlarınızla ilgili sorularınız mı var? 
              Uzman ekibimiz size en uygun gayrimenkul fırsatlarını sunmak için hazır.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <Phone className="text-primary mt-1 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Telefon</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-gray-300 hover:text-primary transition">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary mt-1 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">E-posta</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-primary transition">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary mt-1 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Adres</h3>
                    <p className="text-gray-300">
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-primary mt-1 mr-3" size={24} />
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Çalışma Saatleri</h3>
                    <p className="text-gray-300">
                      {WORKING_HOURS}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/iletisim" className="btn btn-primary px-10">
              İletişim Sayfasına Git
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;