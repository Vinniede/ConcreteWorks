// Services Data

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  areas?: string[];
}

export const services: Service[] = [
  {
    id: 'service-1',
    name: 'Driveway Installation',
    description: 'Professional installation of high-quality cabro paving for driveways. We ensure durability, proper drainage, and beautiful finishes.',
    image: '/images/Driveway Paving.jpg',
    features: [
      'Proper foundation preparation',
      'Expert interlocking installation',
      'Excellent drainage system',
      '10+ year durability guarantee',
      'Multiple design options'
    ],
    areas: ['Residential driveways', 'Commercial parking', 'Multi-car garages']
  },
  {
    id: 'service-2',
    name: 'Road Paving',
    description: 'Large-scale road construction and paving using professional-grade materials. Perfect for municipal roads and expressways.',
    image: '/images/Road Paving.jpg',
    features: [
      'Heavy-duty materials',
      'Professional grading and leveling',
      'Traffic-tested design',
      'Long-term durability',
      'Quick installation'
    ],
    areas: ['Municipal roads', 'Expressways', 'Industrial roads', 'Access roads']
  },
  {
    id: 'service-3',
    name: 'Installation & Finishing',
    description: 'Complete cabro installation service with professional finishing. From preparation to final touches, we handle everything.',
    image: '/images/Cabro Installation.jpeg',
    features: [
      'Site preparation',
      'Expert installation',
      'Fine grading and leveling',
      'Professional finishing touches',
      'Cleanup and landscaping'
    ],
    areas: ['Residential areas', 'Commercial spaces', 'Public spaces', 'Gardens']
  }
];
