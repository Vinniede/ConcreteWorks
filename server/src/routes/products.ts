import express, { Router, Request, Response } from 'express';
import * as productService from '../services/productService.js';
import { ApiResponse, Product } from '../types/index.js';

const router: Router = express.Router();

// GET all products with optional category filter
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const products = await productService.getAllProducts(category as string);
    res.json({ success: true, data: products } as ApiResponse<Product[]>);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET product by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const product = await productService.getProductById(id);
    
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    
    return res.json({ success: true, data: product } as ApiResponse<Product>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST new product (admin only in production)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, category, description, price_per_m2, thickness, color, image_url, specifications } = req.body;
    
    if (!name || !category || typeof price_per_m2 !== 'number') {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const newProduct = await productService.createProduct({
      name,
      category,
      description,
      price_per_m2,
      thickness,
      color,
      image_url,
      specifications,
    });
    
    return res.status(201).json({ success: true, data: newProduct } as ApiResponse<Product>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
