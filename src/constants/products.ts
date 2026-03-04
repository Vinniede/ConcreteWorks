// Product Categories and Data

export interface ProductType {
  id: string;
  name: string;
  category: 'cabro' | 'cobblestone' | 'kerbstone';
  description: string;
  image: string;
  thickness?: string[];
  useCases: string[];
  features: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  categoryKey: 'cabro' | 'cobblestone' | 'kerbstone';
  description: string;
  icon: string;
}

// Product Categories
export const productCategories: ProductCategory[] = [
  {
    id: 'cat-1',
    name: 'Cabro Paving Blocks',
    categoryKey: 'cabro',
    description: 'Interlocking concrete stones for driveways, walkways, and parking areas',
    icon: '🧱'
  },
  {
    id: 'cat-2',
    name: 'Cobblestones',
    categoryKey: 'cobblestone',
    description: 'Decorative paving stones for estates, hotels, and gardens',
    icon: '🏛️'
  },
  {
    id: 'cat-3',
    name: 'Kerb Stones',
    categoryKey: 'kerbstone',
    description: 'Edge and landscaping stones for roads and drainage control',
    icon: '🛣️'
  }
];

// CABRO PAVING BLOCKS
export const cabroPavingBlocks: ProductType[] = [
  {
    id: 'cabro-1',
    name: 'Uni Pavers',
    category: 'cabro',
    description: 'Simple, uniform square pavers. Most versatile and popular choice for driveways and walkways.',
    image: '/images/Uni pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Driveways', 'Walkways', 'Parking areas', 'Commercial spaces'],
    features: ['Uniform design', 'Easy installation', 'Multiple colors', 'Durable interlocking']
  },
  {
    id: 'cabro-2',
    name: 'Quad Pavers',
    category: 'cabro',
    description: 'Four-part modular design creating attractive patterns. Perfect for decorative installations.',
    image: '/images/Quad pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Decorative driveways', 'Patios', 'Walkways', 'Garden paths'],
    features: ['Modular design', 'Multiple pattern options', 'Professional appearance', 'Good drainage']
  },
  {
    id: 'cabro-3',
    name: 'Zigzag Pavers',
    category: 'cabro',
    description: 'Zigzag pattern creates dynamic, modern aesthetic. Great for contemporary designs.',
    image: '/images/Zigzag pavers.jpeg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Modern driveways', 'Contemporary patios', 'Visual interest areas'],
    features: ['Modern design', 'Complex patterns', 'High visual impact', 'Durable']
  },
  {
    id: 'cabro-4',
    name: 'Hexagon Pavers',
    category: 'cabro',
    description: 'Six-sided geometric design. Creates unique honeycomb-like patterns.',
    image: '/images/Hexagon pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Decorative patios', 'Feature areas', 'Garden designs', 'Artistic installations'],
    features: ['Geometric design', 'Unique patterns', 'Distinctive look', 'Premium aesthetic']
  },
  {
    id: 'cabro-5',
    name: 'Arrow Pavers',
    category: 'cabro',
    description: 'Arrow-shaped design creating directional flow. Perfect for driveways and pathways.',
    image: '/images/Arrow pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Directional pathways', 'Driveways', 'Feature entrances', 'Wayfinding areas'],
    features: ['Directional design', 'Modern look', 'Enhanced navigation', 'Interlocking security']
  },
  {
    id: 'cabro-6',
    name: 'T-Shaped Pavers',
    category: 'cabro',
    description: 'T-shaped interlocking design. Creates interesting cross-patterns.',
    image: '/images/T-shaped pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Decorative driveways', 'Walkways', 'Plazas', 'Feature spaces'],
    features: ['Unique T-shape', 'Strong interlocking', 'Visual patterns', 'Durable']
  },
  {
    id: 'cabro-7',
    name: 'Double T-Pavers',
    category: 'cabro',
    description: 'Double T-shaped design for enhanced pattern complexity. Premium option.',
    image: '/images/Double T pavers.webp',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Premium driveways', 'High-end patios', 'Decorative areas', 'Luxury properties'],
    features: ['Complex interlocking', 'Premium appearance', 'Strong grip', 'Artistic patterns']
  },
  {
    id: 'cabro-8',
    name: 'Octagon Pavers',
    category: 'cabro',
    description: 'Eight-sided design creating stylish, traditional patterns.',
    image: '/images/Octagon pavers.jpeg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Traditional homes', 'Elegant patios', 'Formal gardens', 'Classic designs'],
    features: ['Traditional aesthetic', 'Geometric design', 'Multiple color options', 'Timeless appeal']
  },
  {
    id: 'cabro-9',
    name: 'Diamond Pavers',
    category: 'cabro',
    description: 'Diamond-shaped design creating striking visual patterns. Statement piece.',
    image: '/images/Diamond pavers.jpg',
    thickness: ['50mm', '60mm', '80mm'],
    useCases: ['Statement driveways', 'Show properties', 'Premium installations', 'Decorative features'],
    features: ['Diamond shape', 'Bold patterns', 'High impact', 'Premium look']
  }
];

// COBBLESTONES
export const cobblestones: ProductType[] = [
  {
    id: 'cobble-1',
    name: 'Square Cobbles',
    category: 'cobblestone',
    description: 'Uniform square-cut cobblestones. Classic decorative choice for estates and gardens.',
    image: '/images/Square cobbles.jpeg',
    thickness: ['60mm', '80mm'],
    useCases: ['Estate driveways', 'Hotel entrances', 'Garden pathways', 'Decorative areas'],
    features: ['Classic design', 'Precise cutting', 'Professional finish', 'Durable stone']
  },
  {
    id: 'cobble-2',
    name: 'Natural Stone Cobbles',
    category: 'cobblestone',
    description: 'Naturally weathered stone cobbles. Rustic, authentic appearance for traditional designs.',
    image: '/images/Natural stone cobbles.jpeg',
    thickness: ['60mm', '80mm'],
    useCases: ['Historic properties', 'Rustic gardens', 'Farm estates', 'Traditional pathways'],
    features: ['Natural texture', 'Rustic look', 'Authentic feel', 'Unique variations']
  },
  {
    id: 'cobble-3',
    name: 'Decorative Cobble Sets',
    category: 'cobblestone',
    description: 'Mixed color and pattern cobblesets. Premium decorative option for high-end projects.',
    image: '/images/decorative cobble sets.jpg',
    thickness: ['60mm', '80mm'],
    useCases: ['Luxury estates', '5-star hotels', 'Premium gardens', 'Showcase properties'],
    features: ['Multi-color options', 'Premium finish', 'Artistic patterns', 'Luxury appearance']
  }
];

// KERB STONES
export const kerbStones: ProductType[] = [
  {
    id: 'kerb-1',
    name: 'Straight Kerbs',
    category: 'kerbstone',
    description: 'Standard straight kerb stones. Essential for road edges and parking area boundaries.',
    image: '/images/straight kerbs.webp',
    thickness: ['100mm', '150mm'],
    useCases: ['Road edges', 'Parking boundaries', 'Landscape borders', 'Drainage edges'],
    features: ['Precision cut', 'Various lengths', 'Strong grip', 'Drainage compatible']
  },
  {
    id: 'kerb-2',
    name: 'Radius Kerbs',
    category: 'kerbstone',
    description: 'Curved kerb stones for corners and curved roads. Perfect for roundabouts and curves.',
    image: '/images/radius kerbs.jpeg',
    thickness: ['100mm', '150mm'],
    useCases: ['Roundabouts', 'Curved roads', 'Circular parking', 'Feature curves'],
    features: ['Curved design', 'Multiple radii', 'Professional curves', 'Traffic safe']
  },
  {
    id: 'kerb-3',
    name: 'Sloped Kerbs',
    category: 'kerbstone',
    description: 'Sloped kerbs for drainage and accessibility. Allows water runoff and wheelchair access.',
    image: '/images/sloped kerbs.jpg',
    thickness: ['100mm', '150mm'],
    useCases: ['Drainage areas', 'Accessibility ramps', 'Sloped driveways', 'Water management'],
    features: ['Drainage slope', 'ADA compatible', 'Water flow design', 'Safety slope']
  },
  {
    id: 'kerb-4',
    name: 'Road Divider Kerbs',
    category: 'kerbstone',
    description: 'Heavy-duty kerbs for road traffic separation. Designed for high-traffic areas.',
    image: '/images/road divider kerbs.jpeg',
    thickness: ['100mm', '150mm'],
    useCases: ['Road dividers', 'Expressway edges', 'Highway separation', 'Traffic control'],
    features: ['Heavy-duty', 'High visibility', 'Traffic rated', 'Durable concrete']
  }
];

// All products combined
export const allProducts: ProductType[] = [
  ...cabroPavingBlocks,
  ...cobblestones,
  ...kerbStones
];

// Helper function to get products by category
export const getProductsByCategory = (categoryKey: string): ProductType[] => {
  return allProducts.filter(product => product.category === categoryKey);
};

// Helper function to get single product
export const getProductById = (id: string): ProductType | undefined => {
  return allProducts.find(product => product.id === id);
};
