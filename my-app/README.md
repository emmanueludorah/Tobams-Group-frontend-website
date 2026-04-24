# Tobams Group - Frontend Website

Professional website for Tobams Group, a consultancy firm specializing in talent acquisition, training, and organizational development in Africa.

## Live URL

https://tobams-group.vercel.app (deployment pending)

## Design Reference

Figma Design: https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

## Tech Stack

- Next.js 16.2.4 with App Router
- React 19.2.4
- TypeScript for type safety
- Tailwind CSS 4 for styling
- Turbopack for fast builds
- Next.js Image optimization

## Setup Steps

1. Clone the repository
   ```bash
   git clone <https://github.com/emmanueludorah/Tobam-Group_Frontend-website>
   cd my-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Available Commands

Development: npm run dev
Production build: npm run build
Start production: npm start
Lint: npm run lint

## Project Structure

my-app/
- app/ - Pages and layouts
- components/layout/ - Navigation components
- components/sections/ - Page sections
- components/ui/ - Reusable UI components
- public/images/ - Images and icons
- styles/ - CSS files

## Design Decisions

Mobile-First Approach: All layouts built for mobile first, then enhanced for larger screens using Tailwind breakpoints.

Responsive Typography: CSS clamp() function used for fluid font scaling across all screen sizes.

Component Reusability: Sections broken into reusable components for maintainability and consistency.

Tailwind CSS: Utility-first CSS framework chosen for rapid development and consistent styling.

Next.js Image: All images use Next.js Image component for optimization and performance.

Color System: Consistent color palette with primary purples, accent pinks, and neutral grays for brand consistency.

Grid Layouts: CSS Grid and Flexbox used for responsive two-column layouts that stack on mobile.

Responsive Images: Images use aspect ratio to maintain proportions across all screen sizes.

## Known Issues

None at this time. All responsive layouts tested across mobile, tablet, and desktop views.

## Features

Fully responsive design for all devices
Mobile-first navigation with hamburger menu
Carousel testimonials with navigation arrows
Multi-column footer layout
Reusable button and card components
Semantic HTML structure
Fast page load with image optimization
TypeScript for code reliability

## Component Highlights

Navbar: Responsive header with logo and mobile menu
Testimonials: Client stories with carousel navigation
Footer: Multi-column layout with contact information
Sections: Modular sections for Training, Management, CEO Hub, and more
Responsive Grids: 2-column layouts that adapt to mobile

## Color Palette

Primary Purple: #4a1d5e
Dark Purple: #2C0922
Light Pink: #F5D8E3
Accent Pink: #E33B6B
Text Dark: #1a1a1a
Text Light: #cccccc

## Deployment

Build for production:
npm run build
npm start

Deploy to Vercel:
npm install -g vercel
vercel

## Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

## Contact

Email: theteam@tobamsgroup.com
Phone: +447886600748

## License

Proprietary. All rights reserved by Tobams Group.

Last Updated: April 2026
Version: 1.0.0
Status: Production Ready
