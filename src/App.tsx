import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import BlogPostPage from './pages/BlogPostPage';
import WhatsAppButton from './components/ui/WhatsAppButton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-poppins text-primary">DOĞA ARSA OFİSİ</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/portfoy" element={<PortfolioPage />} />
          <Route path="/portfoy/:id" element={<PropertyDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
    </>
  );
}

export default App;