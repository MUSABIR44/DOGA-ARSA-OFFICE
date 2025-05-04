import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/ui/BlogCard';
import SectionHeader from '../components/ui/SectionHeader';
import blogPosts from '../data/blogPosts';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    document.title = 'Blog | DOĞA ARSA OFİSİ';
    window.scrollTo(0, 0);
    
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    // Apply filters
    let result = blogPosts;
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(post => post.category === activeCategory);
    }
    
    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(term) || 
          post.excerpt.toLowerCase().includes(term) || 
          post.content.toLowerCase().includes(term)
      );
    }
    
    // Sort by date, newest first
    result = [...result].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    setFilteredPosts(result);
  }, [activeCategory, searchTerm]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-about-pattern bg-cover bg-center">
        <div className="bg-black/60 py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gayrimenkul Blogu
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                Yatırım tavsiyeleri ve sektör haberleri
              </p>
              <div className="h-1 w-24 bg-primary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader 
            title="Makalelerimiz" 
            subtitle="Gayrimenkul sektörüne dair güncel bilgiler ve yatırım tavsiyeleri"
          />
          
          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch mb-6">
              {/* Search */}
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Blog yazılarında ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
                <Search size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-full transition ${
                  activeCategory === 'all' ? 'filter-active' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                Tümü
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition ${
                    activeCategory === category ? 'filter-active' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-100 rounded-lg">
              <Search size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aramanıza uygun yazı bulunamadı</h3>
              <p className="text-gray-600 mb-4">Lütfen farklı arama kriterleri deneyin veya filtreleri temizleyin.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="btn btn-primary"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;