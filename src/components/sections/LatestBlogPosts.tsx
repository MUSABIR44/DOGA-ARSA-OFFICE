import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import BlogCard from '../ui/BlogCard';
import blogPosts from '../../data/blogPosts';

const LatestBlogPosts: React.FC = () => {
  // Get the 3 most recent blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, 3);

  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader 
          title="Gayrimenkul Blogu" 
          subtitle="Yatırım tavsiyeleri ve sektör haberleri"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog" className="btn btn-primary">
            Tüm Yazıları Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;