import React, { useEffect } from 'react';
import { CheckCircle, Award, Users, BarChart } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Hakkımızda | DOĞA ARSA OFİSİ';
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: <CheckCircle size={40} className="text-primary mb-4" />,
      title: 'Güvenilirlik',
      description: 'Tüm işlemlerimizde şeffaflık ve güven ön plandadır. Müşterilerimizin çıkarlarını her zaman koruruz.'
    },
    {
      icon: <Award size={40} className="text-primary mb-4" />,
      title: 'Uzmanlık',
      description: 'Sektördeki uzun yıllara dayanan deneyimimiz ve bilgi birikimimiz ile en doğru yatırım kararlarını almanıza yardımcı oluruz.'
    },
    {
      icon: <Users size={40} className="text-primary mb-4" />,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin ihtiyaç ve beklentilerini anlar, ona uygun çözümler sunarız. Memnuniyetiniz bizim önceliğimizdir.'
    },
    {
      icon: <BarChart size={40} className="text-primary mb-4" />,
      title: 'Yatırım Vizyonu',
      description: 'Sadece bugünü değil, geleceği de düşünerek, uzun vadeli karlı yatırımlar için rehberlik ederiz.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-about-pattern bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                2005 yılından beri güvenilir gayrimenkul danışmanlığı
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader 
                title="DOĞA ARSA OFİSİ'ni Tanıyın" 
                subtitle="Gayrimenkul yatırımlarında güvenilir adresiniz"
              />
              
              <p className="text-gray-600 mb-6">
                DOĞA ARSA OFİSİ, 2005 yılında İstanbul Beylikdüzü'nde kurulmuş olup, arsa, arazi, villa ve tarla gibi 
                gayrimenkul yatırımları konusunda uzmanlaşmış bir danışmanlık firmasıdır. Kurulduğumuz günden bu yana, 
                binlerce müşterimize doğru ve karlı yatırımlar yapmaları konusunda rehberlik ettik.
              </p>
              
              <p className="text-gray-600 mb-6">
                Sektördeki uzun yılların getirdiği deneyim ve bilgi birikimi ile müşterilerimizin yatırım hedeflerine 
                ulaşmaları için en doğru gayrimenkulleri buluyor, tüm yasal süreçlerde yanlarında oluyoruz. Özellikle 
                İstanbul ve çevre illerdeki arsa ve arazi piyasası konusunda derin bilgiye sahibiz.
              </p>
              
              <p className="text-gray-600">
                Bizim için her müşteri özeldir ve her yatırımcının farklı beklentileri olduğunun bilincindeyiz. 
                Bu nedenle, kişiye özel danışmanlık hizmeti sunarak, müşterilerimizin bütçelerine ve yatırım 
                hedeflerine en uygun gayrimenkulleri bulmalarına yardımcı oluyoruz.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="DOĞA ARSA OFİSİ Ekibi" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 relative">
                Misyonumuz
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary mt-2"></span>
              </h3>
              
              <p className="text-gray-600 mb-6">
                Müşterilerimize gayrimenkul yatırımlarında en doğru ve güvenilir danışmanlık hizmetini sunmak, 
                onların yatırım hedeflerine uygun, değer artış potansiyeli yüksek gayrimenkulleri bulmalarına 
                yardımcı olmak ve tüm süreçte şeffaf ve profesyonel bir yaklaşım sergilemektir.
              </p>
              
              <p className="text-gray-600">
                Her bir müşterimizin memnuniyetini en üst seviyede tutmak ve uzun vadeli iş ilişkileri geliştirerek, 
                sektörün güvenilir ve saygın bir firması olmak temel misyonumuzdur.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 relative">
                Vizyonumuz
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary mt-2"></span>
              </h3>
              
              <p className="text-gray-600 mb-6">
                Türkiye'nin gayrimenkul sektöründe, özellikle arsa ve arazi yatırımları konusunda lider danışmanlık 
                firması olmak ve müşterilerimize sunduğumuz hizmet kalitesiyle sektörde standartları belirleyen 
                bir konuma ulaşmaktır.
              </p>
              
              <p className="text-gray-600">
                Teknolojik yenilikleri takip ederek, gayrimenkul danışmanlığını daha verimli ve kullanıcı dostu 
                hale getirmek ve müşterilerimizin yatırım süreçlerini kolaylaştırmak için sürekli kendimizi geliştirmeyi 
                hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container">
          <SectionHeader 
            title="Değerlerimiz" 
            subtitle="Bizi biz yapan temel prensiplerimiz"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
              >
                {value.icon}
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionHeader 
            title="Uzman Ekibimiz" 
            subtitle="Size yardımcı olmak için buradayız"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ahmet Yılmaz" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ahmet Yılmaz</h3>
                <p className="text-primary font-medium mb-4">Kurucu & Genel Müdür</p>
                <p className="text-gray-600 mb-4">
                  20 yılı aşkın gayrimenkul sektörü deneyimi ile arsa ve arazi yatırımları konusunda uzman.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Zeynep Kaya" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Zeynep Kaya</h3>
                <p className="text-primary font-medium mb-4">Satış Direktörü</p>
                <p className="text-gray-600 mb-4">
                  15 yıllık satış deneyimi ile müşterilerimizin ihtiyaçlarına en uygun çözümleri sunar.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mehmet Demir" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Furkan Yılmaz</h3>
                <p className="text-primary font-medium mb-4">Gayrimenkul Danışmanı</p>
                <p className="text-gray-600 mb-4">
                  8 yıldır Beylikdüzü ve çevresi gayrimenkul piyasasında uzmanlaşmış danışman.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-primary transition">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;