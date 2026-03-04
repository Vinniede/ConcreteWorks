// Quote Service
import { Quote } from '../types/index.js';

export const getAllQuotes = async (_status?: string): Promise<Quote[]> => {
  // Stub implementation
  return [];
};

export const getQuoteById = async (_id: number): Promise<Quote | null> => {
  // Stub implementation
  return null;
};

export const createQuote = async (quote: Partial<Quote>): Promise<Quote> => {
  // Stub implementation
  return { id: 1, name: '', phone: '', ...quote } as Quote;
};

export const updateQuoteStatus = async (_id: number, _status: string): Promise<Quote | null> => {
  // Stub implementation
  return null;
};
