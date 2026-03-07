// Client Testimonials

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  image?: string;
  text: string;
  rating: number; // 1-5 stars
  projectType: 'residential' | 'commercial' | 'municipal';
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'John Kariuki',
    role: 'Property Owner',
    company: 'Riverside Estate',
    image: '/images/clients/john-kariuki.jpg',
    text: 'Gitau Concrete Works transformed our driveway with expert installation and attention to detail. The quality is outstanding and they completed the project ahead of schedule. Highly recommended!',
    rating: 5,
    projectType: 'residential'
  },
  {
    id: 'test-2',
    name: 'Sarah Mwangi',
    role: 'Architect',
    company: 'Modern Designs Ltd',
    image: '/images/clients/sarah-mwangi.jpg',
    text: "We've worked with Gitau Concrete on multiple commercial projects. Their professionalism, reliability, and superior craftsmanship have made them our go-to partner for all paving needs.",
    rating: 5,
    projectType: 'commercial'
  },
  {
    id: 'test-3',
    name: 'David Ochieng',
    role: 'Municipal Engineer',
    company: 'Nairobi City Council',
    image: '/images/clients/david-ochieng.jpg',
    text: 'Their work on the expressway project was exceptional. Heavy-duty materials, proper installation techniques, and commitment to timelines. Professional in every way.',
    rating: 5,
    projectType: 'municipal'
  },
  {
    id: 'test-4',
    name: 'Grace Kipchoge',
    role: 'Hotel Manager',
    company: 'Hilltop Resort',
    image: '/images/clients/grace-kipchoge.jpg',
    text: 'The cobblestone installation for our entrance courtyard is beautiful. Guests love the aesthetic, and the durability has been impressive. Great investment!',
    rating: 5,
    projectType: 'commercial'
  },
  {
    id: 'test-5',
    name: 'Peter Njoroge',
    role: 'Contractor',
    company: 'BuildRight Construction',
    image: '/images/clients/peter-njoroge.jpg',
    text: 'Reliable partner for our residential developments. Quality materials, skilled workers, and excellent customer service. We recommend them regularly.',
    rating: 5,
    projectType: 'residential'
  },
  {
    id: 'test-6',
    name: 'Emma Wanjiru',
    role: 'Home Owner',
    company: 'Westlands Green',
    image: '/images/clients/emma-wanjiru.jpg',
    text: 'Best decision we made for our home renovation. The hexagon paver design they suggested looks amazing, and the build quality is exactly what we wanted.',
    rating: 5,
    projectType: 'residential'
  }
];

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(t => t.id === id);
};

export const getTestimonialsByType = (type: string): Testimonial[] => {
  return testimonials.filter(t => t.projectType === type);
};
