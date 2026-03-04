// Projects Showcase

export interface Project {
  id: string;
  name: string;
  type: 'residential' | 'commercial' | 'municipal';
  description: string;
  image: string;
  details: string;
  features: string[];
  location?: string;
  completionDate?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Luxury Residential Driveway',
    type: 'residential',
    description: 'High-end residential driveway installation with premium cabro designs. Creates stunning visual impact.',
    image: '/images/Luxury Residential Driveway.jpg',
    details: 'Combined multiple paver designs to create a unique, luxurious entrance. Feature area with circle pattern surrounded by running bond design.',
    features: [
      'Premium cabro materials',
      'Multi-design layout',
      'Professional finishing',
      'Advanced drainage system',
      'Decorative accents'
    ],
    location: 'Nairobi, Kenya',
    completionDate: '2024'
  },
  {
    id: 'project-2',
    name: 'Estate Development',
    type: 'residential',
    description: 'Large-scale residential estate with entire paving infrastructure. Coordinated design across multiple properties.',
    image: '/images/Estate Development.jpeg',
    details: 'Complete paving for 50+ residential units. Used consistent running bond design for uniformity while allowing individual customization in courtyards.',
    features: [
      'Large-scale coordination',
      'Consistent design language',
      'Efficient installation',
      'Quality control throughout',
      'Property customization'
    ],
    location: 'Suburban Development',
    completionDate: '2024'
  },
  {
    id: 'project-3',
    name: 'Commercial Plaza',
    type: 'commercial',
    description: 'Modern commercial plaza with integrated paving design. Combines function with aesthetic appeal.',
    image: '/images/commercial plaza.jpg',
    details: 'Professional plaza with clear traffic flow patterns using directional pavers. Heavy-duty materials for high foot traffic areas.',
    features: [
      'Modern design aesthetic',
      'Traffic flow optimization',
      'Heavy-duty materials',
      'Multiple design zones',
      'Accessibility compliant'
    ],
    location: 'Business District',
    completionDate: '2024'
  },
  {
    id: 'project-4',
    name: 'Road Paving Project',
    type: 'municipal',
    description: 'Municipal road paving with professional-grade materials. Designed for durability and heavy traffic.',
    image: '/images/Road Paving.jpg',
    details: 'Complete road reconstruction and paving. Used heavy-duty kerb stones and professional-grade cabro for extended durability.',
    features: [
      'Heavy-duty materials',
      'Professional grading',
      'Drainage system',
      'Long-term durability',
      'Traffic-tested design'
    ],
    location: 'Municipal Road',
    completionDate: '2023'
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByType = (type: string): Project[] => {
  return projects.filter(project => project.type === type);
};
