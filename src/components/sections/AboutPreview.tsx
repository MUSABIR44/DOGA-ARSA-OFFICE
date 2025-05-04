import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const AboutPreview: React.FC = () => {
  const benefits = [
    'Geniş portföy seçenekleri',
    'Yatırım odaklı danışmanlık',
    'Şeffaf ve güvenilir hizmet',
    'Alanında uzman kadro',
    'Güncel piyasa bilgisi',
    'Özel müşteri ilişkileri'
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader 
              title="DOĞA ARSA OFİSİ"
              subtitle="2005 yılından beri güvenilir gayrimenkul danışmanlığı"
            />
            
            <p className="text-gray-600 mb-6">
              DOĞA ARSA OFİSİ olarak, arsa ve gayrimenkul sektöründe uzun yıllara dayanan deneyimimizle, 
              müşterilerimize en doğru yatırım fırsatlarını sunuyoruz. İstanbul başta olmak üzere Türkiye genelinde 
              geniş portföyümüz ile sizlere hizmet vermekteyiz.
            </p>
            
            <p className="text-gray-600 mb-8">
              Misyonumuz, müşterilerimizin beklentilerini en üst düzeyde karşılayarak, 
              onlara değerli yatırım fırsatları sunmak ve bu süreçte profesyonel danışmanlık hizmeti vermektir. 
              Şeffaflık, güven ve müşteri memnuniyeti temel değerlerimizdir.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={20} className="text-primary mr-2" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link to="/hakkimizda" className="btn btn-primary">
              Daha Fazla Bilgi
            </Link>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Doğa Arsa Ofisi Ekibi" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;