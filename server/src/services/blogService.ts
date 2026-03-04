// Blog Service
import { BlogPost } from '../types/index.js';

export const getAllBlogPosts = async (published?: boolean): Promise<BlogPost[]> => {
  // Stub implementation
  return [];
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  // Stub implementation
  return null;
};

export const createBlogPost = async (post: Partial<BlogPost>): Promise<BlogPost> => {
  // Stub implementation
  return { id: 1, title: '', slug: '', content: '', ...post } as BlogPost;
};
