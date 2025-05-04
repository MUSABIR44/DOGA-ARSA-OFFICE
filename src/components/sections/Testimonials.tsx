import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeader from '../ui/SectionHeader';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    position: "Yatırımcı",
    content: "DOĞA ARSA OFİSİ sayesinde Silivri'de harika bir arsa yatırımı yaptım. Profesyonel ve dürüst yaklaşımları için teşekkür ederim. İki yıl içinde arsam değerini ikiye katladı!",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Zeynep Kaya",
    position: "İşletme Sahibi",
    content: "Ticari gayrimenkul arayışımda bana sundukları fırsatlar ve şeffaf danışmanlık için DOĞA ARSA OFİSİ'ne minnettarım. İşletmem için mükemmel bir lokasyon buldular.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Mehmet Demir",
    position: "Müteahhit",
    content: "Uzun yıllardır DOĞA ARSA OFİSİ ile çalışıyorum. Arsa seçimlerinde gösterdikleri titizlik ve piyasa bilgileri sayesinde projelerimizi her zaman karlı bir şekilde tamamladık.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Ayşe Yıldız",
    position: "Emekli Öğretmen",
    content: "Emeklilik yatırımım için aldığım tarım arazisi konusunda DOĞA ARSA OFİSİ'nin tavsiyeleri çok değerliydi. Tüm süreçte yanımda oldular ve sorularımı sabırla yanıtladılar.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <SectionHeader 
          title="Müşteri Görüşleri" 
          subtitle="Müşterilerimizin bizimle paylaştığı deneyimler"
          alignment="center"
        />
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <div className="mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;