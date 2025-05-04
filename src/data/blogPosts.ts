import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Arsa Yatırımı Yaparken Dikkat Edilmesi Gereken 5 Önemli Nokta',
    excerpt: 'Arsa yatırımı, doğru yapıldığında uzun vadede yüksek getiri sağlayabilir. Peki, arsa alırken nelere dikkat etmeliyiz?',
    content: `
      <p>Arsa yatırımı, doğru yapıldığında uzun vadede yüksek getiri sağlayabilir. Ancak yanlış seçimler, ciddi maddi kayıplara neden olabilir. İşte arsa alırken dikkat etmeniz gereken 5 önemli nokta:</p>
      
      <h3>1. İmar Durumu</h3>
      <p>Satın alacağınız arsanın güncel imar durumunu mutlaka kontrol edin. İmarsız bir arsaya yatırım yapmak, gelecekte yapılaşma izni olmayabilir ve arsanız sadece tarımsal amaçlarla kullanılabilir. İlgili belediyeden imar durumu belgesi talep ederek, arsanın yapılaşma koşullarını, TAKS (Taban Alanı Katsayısı) ve KAKS (Kat Alanı Katsayısı) değerlerini öğrenebilirsiniz.</p>
      
      <h3>2. Altyapı İmkanları</h3>
      <p>Arsanın elektrik, su, doğalgaz, kanalizasyon gibi altyapı hizmetlerine erişimi var mı? Eğer bu imkanlar mevcut değilse, ileride bu hizmetleri getirmek için ek maliyet ödemeniz gerekebilir.</p>
      
      <h3>3. Konum ve Ulaşım</h3>
      <p>Arsanın şehir merkezine, ana yollara, toplu taşıma duraklarına, okullara, hastanelere ve alışveriş merkezlerine olan mesafesi değerini etkiler. Ulaşımı kolay olan arsalar her zaman daha değerlidir.</p>
      
      <h3>4. Gelecekteki Gelişim Planları</h3>
      <p>Bölgedeki gelecek projeler (yeni yollar, metrolar, köprüler, havalimanları vb.) arsanızın değerini olumlu yönde etkileyebilir. Belediyenin veya büyükşehir belediyesinin gelecek planlarını araştırın.</p>
      
      <h3>5. Tapu ve Kadastro Durumu</h3>
      <p>Arsanın tapu bilgilerini, sınırlarını ve üzerinde herhangi bir ipotek, haciz veya şerh olup olmadığını kontrol edin. Hisseli tapulu arsalarda, diğer hissedarların izni olmadan yapılaşma gerçekleştiremezsiniz.</p>
      
      <p>Doğa Arsa Ofisi olarak, arsa yatırımı konusunda uzman ekibimizle size en doğru yönlendirmeyi yapmaktan mutluluk duyarız. Sorularınız için bizimle iletişime geçebilirsiniz.</p>
    `,
    image: 'https://images.pexels.com/photos/7120359/pexels-photo-7120359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Yatırım',
    author: 'Ahmet Yılmaz',
    createdAt: new Date('2023-03-15'),
    readTime: 5
  },
  {
    id: 'b2',
    title: 'İstanbul\'un Yükselen Değeri: Beylikdüzü Bölgesi',
    excerpt: 'Son yıllarda İstanbul\'un en hızlı gelişen bölgelerinden biri olan Beylikdüzü, gayrimenkul yatırımcılarının gözdesi haline geldi.',
    content: `
      <p>Son yıllarda İstanbul'un en hızlı gelişen bölgelerinden biri olan Beylikdüzü, gayrimenkul yatırımcılarının gözdesi haline geldi. Özellikle planlı kentleşme, geniş yeşil alanlar ve ulaşım olanaklarındaki gelişmeler, bölgeyi cazip kılıyor.</p>
      
      <h3>Neden Beylikdüzü?</h3>
      <p>Beylikdüzü'nün İstanbul'un diğer gelişen bölgelerine göre sunduğu bazı avantajlar:</p>
      <ul>
        <li>E-5 ve TEM bağlantı yollarına yakınlık</li>
        <li>Metrobüs hattının varlığı</li>
        <li>Planlı kentleşme ve modern konutlar</li>
        <li>Kişi başına düşen yeşil alan miktarının yüksek olması</li>
        <li>Denize kıyısı olması</li>
        <li>Büyük alışveriş merkezleri ve hastanelerin varlığı</li>
      </ul>
      
      <h3>Yatırım Potansiyeli</h3>
      <p>Beylikdüzü'nde özellikle imarlı arsalar, yatırımcılar için büyük potansiyel taşıyor. Bölgedeki gelişim hızı, gayrimenkul değerlerini olumlu yönde etkiliyor. Son 5 yılda bölgedeki arsa fiyatları ortalama %120 oranında artış gösterdi.</p>
      
      <h3>Gelecek Projeler</h3>
      <p>Bölgede yakın zamanda hayata geçirilecek bazı önemli projeler:</p>
      <ul>
        <li>Yeni raylı sistem hatları</li>
        <li>Sahil düzenlemeleri</li>
        <li>Yeni eğitim kurumları</li>
        <li>Spor kompleksleri</li>
      </ul>
      
      <p>Doğa Arsa Ofisi olarak, Beylikdüzü ve çevresindeki arsa ve gayrimenkul yatırımları konusunda uzman danışmanlık hizmeti vermekteyiz. Size özel yatırım fırsatlarını değerlendirmek için ofisimize bekliyoruz.</p>
    `,
    image: 'https://images.pexels.com/photos/2249961/pexels-photo-2249961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Bölge Analizi',
    author: 'Mehmet Demir',
    createdAt: new Date('2023-02-25'),
    readTime: 6
  },
  {
    id: 'b3',
    title: 'Tarım Arazisi Alırken Toprak Analizinin Önemi',
    excerpt: 'Tarım arazisi yatırımı yapmadan önce, toprağın verimini ve hangi ürünlere uygun olduğunu belirlemek için toprak analizi yaptırmak büyük önem taşır.',
    content: `
      <p>Tarım arazisi yatırımı yapmadan önce, toprağın verimini ve hangi ürünlere uygun olduğunu belirlemek için toprak analizi yaptırmak büyük önem taşır. Bu analiz sayesinde, toprağın pH değeri, besin maddeleri içeriği, organik madde oranı gibi önemli bilgilere ulaşabilirsiniz.</p>
      
      <h3>Toprak Analizi Nedir?</h3>
      <p>Toprak analizi, bir arazi parçasından alınan toprak örneklerinin laboratuvar ortamında incelenerek fiziksel, kimyasal ve biyolojik özelliklerinin belirlenmesi işlemidir. Bu analiz sonucunda, toprağın tarımsal üretim için ne kadar elverişli olduğu ve hangi tür ürünlerin yetiştirilebileceği hakkında bilgi edinilir.</p>
      
      <h3>Neden Toprak Analizi Yaptırmalıyız?</h3>
      <ul>
        <li>Arazinin tarımsal potansiyelini belirlemek için</li>
        <li>Hangi ürünlerin daha verimli yetişebileceğini öğrenmek için</li>
        <li>Toprağın eksik besin maddelerini tespit etmek için</li>
        <li>Gereksiz gübre kullanımını önlemek için</li>
        <li>Tarımsal verimi artırmak için</li>
        <li>Yatırım kararını sağlam temellere dayandırmak için</li>
      </ul>
      
      <h3>Analiz Nasıl Yapılır?</h3>
      <p>Toprak analizi için arazinin farklı noktalarından toprak örnekleri alınır ve bu örnekler ziraat fakülteleri, tarım il/ilçe müdürlükleri veya özel laboratuvarlarda incelenir. Analiz sonuçları genellikle 1-2 hafta içinde hazır olur.</p>
      
      <h3>Yatırım Kararındaki Rolü</h3>
      <p>Bir tarım arazisine yatırım yapmadan önce mutlaka toprak analizi yaptırmanızı öneririz. Bu sayede, arazinin gerçek değerini ve potansiyelini daha iyi anlayabilir, uzun vadeli yatırım planınızı buna göre şekillendirebilirsiniz.</p>
      
      <p>Doğa Arsa Ofisi olarak, tarım arazisi yatırımlarınızda size rehberlik ediyor, gerekli toprak analizlerinin organizasyonunda yardımcı oluyoruz. Detaylı bilgi için ofisimize uğrayabilir veya telefonla iletişime geçebilirsiniz.</p>
    `,
    image: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Tarım',
    author: 'Zeynep Yıldız',
    createdAt: new Date('2023-02-10'),
    readTime: 7
  },
  {
    id: 'b4',
    title: 'Villa Satın Alırken Dikkat Edilmesi Gereken Yapısal Özellikler',
    excerpt: 'Lüks bir yaşam tarzı veya yatırım için villa satın alırken, estetik özellikler kadar yapısal detaylara da dikkat etmek gerekiyor.',
    content: `
      <p>Lüks bir yaşam tarzı veya yatırım için villa satın alırken, estetik özellikler kadar yapısal detaylara da dikkat etmek gerekiyor. Doğru seçim yapmak, hem yaşam kalitenizi artıracak hem de yatırımınızın değerini koruyacaktır.</p>
      
      <h3>İnşaat Kalitesi</h3>
      <p>Villanın yapımında kullanılan malzemelerin kalitesi, binanın ömrünü ve dayanıklılığını doğrudan etkiler. Duvarların, çatının, tesisatın ve diğer yapısal elemanların kalitesi, uzun vadede bakım masraflarınızı belirleyecektir.</p>
      
      <h3>Yalıtım Özellikleri</h3>
      <p>İyi bir ısı ve ses yalıtımı, hem enerji tasarrufu sağlar hem de konfor sunar. Çift camlı pencereler, dış cephe yalıtımı ve çatı izolasyonu gibi özelliklere dikkat edin.</p>
      
      <h3>Temel ve Zemin Durumu</h3>
      <p>Villanın inşa edildiği zeminin jeolojik yapısı ve temel özellikleri büyük önem taşır. Özellikle deprem bölgelerinde, binanın depreme dayanıklılık belgelerini mutlaka kontrol edin.</p>
      
      <h3>Tesisat Sistemleri</h3>
      <p>Su, elektrik, doğalgaz ve kanalizasyon tesisatının kalitesi ve durumu, günlük yaşam konforunuzu doğrudan etkiler. Tesisatın güncel standartlara uygun olup olmadığını kontrol edin.</p>
      
      <h3>Çatı Durumu</h3>
      <p>Çatının yapısı, malzemesi ve yalıtım özellikleri, hem enerji verimliliği hem de su yalıtımı açısından önemlidir. Çatı katmanlarının durumunu ve yağmur suyu tahliye sistemini inceleyin.</p>
      
      <h3>Havalandırma Sistemi</h3>
      <p>Özellikle kapalı alanların (banyo, mutfak, bodrum) havalandırma sistemleri, nem ve küf oluşumunu engellemek için önemlidir. Villada merkezi veya bölgesel havalandırma sistemlerinin varlığını kontrol edin.</p>
      
      <p>Doğa Arsa Ofisi olarak, portföyümüzdeki tüm villaların yapısal özelliklerini detaylı şekilde inceliyor ve müşterilerimize şeffaf bilgi sunuyoruz. Villa yatırımı düşünüyorsanız, uzman ekibimiz size en doğru seçimi yapmanızda yardımcı olacaktır.</p>
    `,
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Villa',
    author: 'Ali Can',
    createdAt: new Date('2023-01-28'),
    readTime: 8
  },
];

export default blogPosts;