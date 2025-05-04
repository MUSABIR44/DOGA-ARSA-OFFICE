import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, User } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-56 object-cover"
        />
      </Link>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1">
            {post.category}
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap items-center text-xs text-gray-500 pt-3 border-t border-gray-100">
          <div className="flex items-center mr-4 mb-2">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
          
          <div className="flex items-center mr-4 mb-2">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          
          <div className="flex items-center mb-2">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime} dk okuma</span>
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
        >
          Devamını Oku
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;