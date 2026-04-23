# Tobams Group - Frontend Website

Frontend website for Tobams Group, a consultancy firm in Africa focused on talent, training, and organizational change.

## Features

- **Responsive Design** - Works on all device sizes
- **Reusable Components** - Well-structured React components
- **Smooth Animations** - Interactive elements
- **Fast Images** - Next.js Image optimization
- **Accessible** - Semantic HTML
- **Fast Build** - Turbopack bundler
- **Clean Styling** - Tailwind CSS with custom styles

## Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe code
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - CSS utilities
- **React**: [React 19.2.4](https://react.dev/) - React with hooks
- **Build Tool**: Turbopack - Fast bundler
- **Package Manager**: npm

## Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Setup Steps

1. **Clone repo**
   ```bash
   git clone <repository-url>
   cd frontennd-intern/my-app
   ```

2. **Install packages**
   ```bash
   npm install
   ```

3. **Start dev server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
my-app/
├── app/                      # Pages and layouts
├── components/
│   ├── layout/              # Layout (Navbar)
│   ├── sections/            # Page sections (Hero, Footer, etc.)
│   └── ui/                  # UI components (Button, Card, etc.)
├── lib/                     # Utils
├── public/images/           # Images and icons
├── styles/                  # Styles
└── Config files             # package.json, tsconfig.json, etc.
```

## Design System

### Colors
- **Primary Purple**: `#4a1d5e`
- **Dark Purple**: `#2C0922`
- **Light Pink**: `#F5D8E3`
- **Accent Pink**: `#E33B6B`
- **Light Gray**: `#F0EBF1`
- **Text Dark**: `#1a1a1a`, `#333333`
- **Text Light**: `#cccccc`, `#E8E8E8`

### Typography
- **Headings**: Nunito (weight 700)
- **Body**: Nunito Sans (weights 400, 500, 600)
- **Font Size**: CSS `clamp()` for responsive scaling

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Pages and Sections

### Home Page (`/`)
The main landing page featuring:

1. **Navbar** - Logo and menu
2. **Hero** - Welcome banner
3. **Transformation** - Training overview
4. **LMS Intro** - Academy introduction
5. **Consultant** - Training programs
6. **Management Program** - Training and development
7. **Management Dev** - Program details
8. **Learning CEO** - CEO hub
9. **Training Consultant** - Program details
10. **Testimonials** - Client stories with carousel
11. **Footer** - Contact and links

## Key Components

### Navbar
- Mobile and desktop menu
- Account dropdown
- Assessment button
- Logo

### Hero
- Headline and message
- Subheading
- CTA buttons
- Responsive image

### Testimonials
- Client cards with avatars
- Carousel navigation
- Responsive grid
- Client quotes

### Footer
- Contact button
- Company info and social links
- Multi-column nav
- Email and phone
- Office locations
- Links and copyright

## Customization

### Change Colors
Update hex values in style props:
```jsx
style={{ color: '#4a1d5e' }}
```

### Change Typography
Font sizes scale with CSS `clamp()`:
```jsx
fontSize: 'clamp(minPx, vw%, maxPx)'
```

### Add New Sections
1. Create file in `components/sections/`
2. Import `Image` from `next/image`
3. Export component
4. Add to `app/page.tsx`

## Responsive Design

Components use:
- **Tailwind breakpoints** for layout
- **CSS clamp()** for scaling
- **Aspect ratio** for images
- **Flexbox/Grid** for layouts

## Image Assets

Located in `/public/images/`:
- Logo and branding
- Section backgrounds
- Avatars
- Icons (mail, phone, social)
- Decorative images

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev  # Uses next available port
```

**Clear cache:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors?**
```bash
npm run build
```

## Best Practices

- Use **Next.js Image** for all images
- Use **CSS clamp()** for scaling
- Use **Tailwind** for layout and spacing
- Use **inline styles** for colors
- Test on **multiple screen sizes**
- Optimize **image file sizes**

## Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Contact

Questions? Contact Tobams Group:
- **Email**: theteam@tobamsgroup.com
- **Phone**: +447886600748
- **Website**: [tobamsgroup.com](https://tobamsgroup.com)

## License

Proprietary. All rights reserved by Tobams Group.

---

**Last Updated**: April 2026  
**Version**: 1.0.0  
**Status**: Production Ready
