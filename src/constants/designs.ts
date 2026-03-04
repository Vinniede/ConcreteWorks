// Cabro Design Patterns

export interface Design {
  id: string;
  name: string;
  category: 'traditional' | 'modern' | 'decorative';
  description: string;
  image: string;
  bestFor: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

export const cabroDesigns: Design[] = [
  {
    id: 'design-1',
    name: 'Herringbone',
    category: 'traditional',
    description: 'Classic V-shaped or zigzag pattern. One of the most popular and timeless designs. Creates beautiful visual flow.',
    image: '/images/Herringbone.jpg',
    bestFor: ['Driveways', 'Patios', 'Walkways', 'Entryways'],
    difficulty: 'medium'
  },
  {
    id: 'design-2',
    name: 'Running Bond',
    category: 'traditional',
    description: 'Simple, elegant pattern where each row is offset. Creates a clean, professional appearance.',
    image: '/images/Running Bond.webp',
    bestFor: ['Large driveways', 'Commercial areas', 'Modern homes', 'Parking areas'],
    difficulty: 'easy'
  },
  {
    id: 'design-3',
    name: 'Basket Weave',
    category: 'traditional',
    description: 'Interlocking rectangular pattern that resembles woven baskets. Creates interesting texture and depth.',
    image: '/images/Basket Weave.webp',
    bestFor: ['Patios', 'Decorative areas', 'Luxury homes', 'Garden spaces'],
    difficulty: 'medium'
  },
  {
    id: 'design-4',
    name: 'Flemish Bond',
    category: 'traditional',
    description: 'Alternating pattern combining headers and stretchers. Creates sophisticated, layered appearance.',
    image: '/images/Flemish Bond.jpg',
    bestFor: ['Premium driveways', 'Estates', 'Historic properties', 'Feature areas'],
    difficulty: 'hard'
  },
  {
    id: 'design-5',
    name: 'Circle Pattern',
    category: 'decorative',
    description: 'Circular or radial design creating eye-catching focal point. Perfect for feature areas and centerpieces.',
    image: '/images/Circle Pattern.jpg',
    bestFor: ['Feature areas', 'Entryways', 'Round-about centers', 'Decorative spaces'],
    difficulty: 'hard'
  }
];

export const getDesignById = (id: string): Design | undefined => {
  return cabroDesigns.find(design => design.id === id);
};

export const getDesignsByCategory = (category: string): Design[] => {
  return cabroDesigns.filter(design => design.category === category);
};
