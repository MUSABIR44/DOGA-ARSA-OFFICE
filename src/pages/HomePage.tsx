import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProperties from '../components/sections/FeaturedProperties';
import AboutPreview from '../components/sections/AboutPreview';
import Testimonials from '../components/sections/Testimonials';
import LatestBlogPosts from '../components/sections/LatestBlogPosts';
import ContactPreview from '../components/sections/ContactPreview';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'DOĞA ARSA OFİSİ | Gayrimenkul & Arsa Yatırımları';
  }, []);

  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutPreview />
      <Testimonials />
      <LatestBlogPosts />
      <ContactPreview />
    </>
  );
};

export default HomePage;