import express, { Router, Request, Response } from 'express';
import * as quoteService from '../services/quoteService.js';
import { ApiResponse, Quote } from '../types/index.js';

const router: Router = express.Router();

// GET all quotes
router.get('/', async (req: Request, res: Response) => {
  try {
    const { status } = req.query;
    const quotes = await quoteService.getAllQuotes(status as string);
    res.json({ success: true, data: quotes } as ApiResponse<Quote[]>);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET quote by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const quote = await quoteService.getQuoteById(id);
    
    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote not found' });
    }
    
    return res.json({ success: true, data: quote } as ApiResponse<Quote>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST new quote
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, phone, email, location, product_type, area_size, message } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ success: false, error: 'Name and phone are required' });
    }

    const newQuote = await quoteService.createQuote({
      name,
      phone,
      email,
      location,
      product_type,
      area_size: area_size ? parseFloat(area_size) : undefined,
      message,
    });
    
    return res.status(201).json({ success: true, data: newQuote, message: 'Quote created successfully' } as ApiResponse<Quote>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH quote status
router.patch('/:id/status', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;
    
    if (!['pending', 'responded', 'completed'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status' });
    }

    const updatedQuote = await quoteService.updateQuoteStatus(id, status);
    
    if (!updatedQuote) {
      return res.status(404).json({ success: false, error: 'Quote not found' });
    }
    
    return res.json({ success: true, data: updatedQuote } as ApiResponse<Quote>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
