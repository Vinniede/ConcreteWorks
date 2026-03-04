// Type definitions for API responses and entities

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  description?: string;
  price_per_m2?: number;
  thickness?: string;
  color?: string;
  image_url?: string;
  specifications?: string;
  created_at?: Date;
}

export interface Quote {
  id: number;
  name: string;
  phone: string;
  email?: string;
  location?: string;
  product_type?: string;
  area_size?: number;
  message?: string;
  status?: 'pending' | 'responded' | 'completed';
  created_at?: Date;
}

export interface Project {
  id: number;
  title: string;
  location?: string;
  category?: string;
  product?: string;
  area?: number;
  before_image_url?: string;
  after_image_url?: string;
  duration?: string;
  description?: string;
  testimonial?: string;
  client_name?: string;
  created_at?: Date;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  author?: string;
  category?: string;
  content: string;
  excerpt?: string;
  image_url?: string;
  featured?: boolean;
  published?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
