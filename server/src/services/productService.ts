// Product Service
import { Product } from '../types/index.js';

export const getAllProducts = async (_category?: string): Promise<Product[]> => {
  // Stub implementation
  return [];
};

export const getProductById = async (_id: number): Promise<Product | null> => {
  // Stub implementation
  return null;
};

export const createProduct = async (product: Partial<Product>): Promise<Product> => {
  // Stub implementation
  return { id: 1, ...product } as Product;
};
