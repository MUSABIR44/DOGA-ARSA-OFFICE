import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';
import SectionHeader from '../components/ui/SectionHeader';
import { 
  PHONE_NUMBER, 
  EMAIL, 
  OFFICE_ADDRESS, 
  WORKING_HOURS,
  GOOGLE_MAPS_URL 
} from '../utils/constants';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'İletişim | DOĞA ARSA OFİSİ';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-about-pattern bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                İletişim
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                Bizimle iletişime geçin
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader 
                title="Bize Ulaşın" 
                subtitle="Sorularınız için mesaj gönderin, size en kısa sürede dönüş yapacağız"
              />
              
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div>
              <SectionHeader 
                title="İletişim Bilgilerimiz" 
                subtitle="Size yardımcı olmaktan mutluluk duyarız"
              />
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="bg-primary/10 p-4 rounded-full mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Telefon</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-gray-600 hover:text-primary transition">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary/10 p-4 rounded-full mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">E-posta</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-primary transition">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary/10 p-4 rounded-full mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Adres</h3>
                    <p className="text-gray-600">
                      {OFFICE_ADDRESS}
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary/10 p-4 rounded-full mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      {WORKING_HOURS}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Bizimle Çalışmak İster misiniz?</h3>
                <p className="text-gray-600 mb-4">
                  Gayrimenkul danışmanı olarak ekibimize katılmak için bize e-posta gönderebilir veya 
                  ofisimizi ziyaret edebilirsiniz.
                </p>
                <a href={`mailto:${EMAIL}`} className="btn btn-primary">
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container">
          <SectionHeader 
            title="Bize Ulaşın" 
            subtitle="Ofisimizin konumu"
            alignment="center"
          />
          
          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe 
              src={GOOGLE_MAPS_URL}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="DOĞA ARSA OFİSİ Konum"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;