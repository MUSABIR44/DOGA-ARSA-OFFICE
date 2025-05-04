export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  city: string;
  district: string;
  area: number;
  type: 'arsa' | 'arazi' | 'villa' | 'tarla' | 'ticari';
  features: string[];
  images: string[];
  isFeatured: boolean;
  isNew: boolean;
  createdAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  createdAt: Date;
  readTime: number;
}