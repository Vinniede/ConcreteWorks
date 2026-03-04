import express, { Router, Request, Response } from 'express';
import * as projectService from '../services/projectService.js';
import { ApiResponse, Project } from '../types/index.js';

const router: Router = express.Router();

// GET all projects with optional category filter
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const projects = await projectService.getAllProjects(category as string);
    res.json({ success: true, data: projects } as ApiResponse<Project[]>);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET project by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const project = await projectService.getProjectById(id);
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    return res.json({ success: true, data: project } as ApiResponse<Project>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

// POST new project
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, location, category, product, area, before_image_url, after_image_url, duration, description, testimonial, client_name } = req.body;
    
    if (!title) {
      return res.status(400).json({ success: false, error: 'Title is required' });
    }

    const newProject = await projectService.createProject({
      title,
      location,
      category,
      product,
      area,
      before_image_url,
      after_image_url,
      duration,
      description,
      testimonial,
      client_name,
    });
    
    return res.status(201).json({ success: true, data: newProject } as ApiResponse<Project>);
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
