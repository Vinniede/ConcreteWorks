// Project Service
import { Project } from '../types/index.js';

export const getAllProjects = async (type?: string): Promise<Project[]> => {
  // Stub implementation
  return [];
};

export const getProjectById = async (id: number): Promise<Project | null> => {
  // Stub implementation
  return null;
};

export const createProject = async (project: Partial<Project>): Promise<Project> => {
  // Stub implementation
  return { id: 1, title: '', ...project } as Project;
};
