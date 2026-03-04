# Gitau Concrete Works

Premium quality concrete paving blocks, cobblestones, and kerb stones.

## Project Overview

Gitau Concrete Works is a modern, responsive website showcasing high-quality concrete products for construction and landscaping. The website features:

- **7-Page Structure:**
  - Home - Hero section with featured products and categories
  - Products - Full product catalog with category filtering
  - Designs - Design patterns and styles showcase
  - Projects - Gallery of completed projects
  - Services - Professional services offered
  - Contact - Contact form and information
  - Category Pages - Detailed views of product categories

- **Interactive Features:**
  - Product calculator modal
  - Design visualizer
  - Responsive mobile menu
  - Product search and filtering
  - Smooth animations and transitions

- **Products:**
  - 16 high-quality products across 3 categories
  - Carbro Paving Blocks
  - Cobblestones
  - Kerbstones

## Technology Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS with responsive design
- **Backend:** Node.js + Express
- **Database:** (To be configured)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ConcreteWorks.git
cd ConcreteWorks
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Install server dependencies:

```bash
cd server
npm install --legacy-peer-deps
cd ..
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

Build output will be in the `dist/` directory.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── cards/        # Product, service, design cards
│   │   ├── common/       # Navbar, Footer, common components
│   │   └── modals/       # Calculator and design visualizer
│   ├── pages/            # Page components
│   ├── constants/        # Product, design, project data
│   ├── services/         # API services
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── server/               # Backend server
├── Videos/              # Video assets
├── index.html
├── package.json
└── vite.config.ts
```

## Responsive Breakpoints

- **Mobile Small:** 320px
- **Mobile:** 480px
- **Tablet:** 768px
- **Laptop:** 1024px
- **Desktop:** 1280px
- **Large Desktop:** 1536px

## Features

### Responsive Design

- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly interface

### Video Integration

- Background videos in hero sections
- Category showcase videos
- MP4 format for wide browser support

### Product Categories

- Cabro Paving Blocks
- Cobblestones
- Kerbstones

### Design Patterns

- Multiple design options
- Pattern visualizer
- Category-based organization

### Projects Gallery

- Completed project showcase
- Client testimonials ready (for future implementation)
- Project details and specifications

## Future Enhancements

- E-commerce functionality
- Order tracking system
- Customer account system
- Advanced search and filtering
- Blog/News section
- Customer testimonials
- Payment integration

## Support

For support, please contact us through the website contact form.

## License

This project is proprietary. All rights reserved to Gitau Concrete Works.

---

Built with ❤️ by the Gitau Concrete Works Team
