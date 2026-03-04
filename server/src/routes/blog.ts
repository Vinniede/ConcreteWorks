import express, { Router, Request, Response } from 'express';
import * as blogService from '../services/blogService.js';
import { ApiResponse, BlogPost } from '../types/index.js';

const router: Router = express.Router();

// GET all published blog posts
router.get('/', async (_req: Request, res: Response) => {
  try {
    const posts = await blogService.getAllBlogPosts(true);
    return res.json({ success: true, data: posts } as ApiResponse<BlogPost[]>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// GET blog post by slug
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const post = await blogService.getBlogPostBySlug(req.params.slug);
    
    if (!post) {
      return res.status(404).json({ success: false, error: 'Blog post not found' });
    }
    
    return res.json({ success: true, data: post } as ApiResponse<BlogPost>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST new blog post (admin only in production)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, slug, author, category, content, excerpt, image_url, featured, published } = req.body;
    
    if (!title || !slug || !content) {
      return res.status(400).json({ success: false, error: 'Title, slug, and content are required' });
    }

    const newPost = await blogService.createBlogPost({
      title,
      slug,
      author,
      category,
      content,
      excerpt,
      image_url,
      featured: featured || false,
      published: published || false,
    });
    
    return res.status(201).json({ success: true, data: newPost } as ApiResponse<BlogPost>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
