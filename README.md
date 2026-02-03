# More Life Recovery - Website Rebuild

A modern, professional Next.js rebuild of the More Life Recovery website - a luxury addiction treatment center in Van Nuys, California.

## Project Overview

This is a complete rewrite of the original WordPress/Elementor-based website (https://moreliferecoveryla.com/), migrated to a modern Next.js application. The site showcases services, programs, and facilities for a leading addiction recovery center.

## Features

### Pages Implemented
- **Home** - Hero section, services overview, programs, testimonials, insurance information
- **About Us** - Mission, values, goals, team information, alumni program
- **Programs** - Residential Treatment (RTC), Intensive Outpatient Program (IOP), program comparison
- **Services** - Detailed service offerings including case management, 12-step, recovery support, veterans programs
- **Testimonials** - Client success stories with ratings
- **Contact Us** - Contact form and information
- **FAQs** - Frequently asked questions
- **Verify Insurance** - Insurance verification form with accepted providers
- **Privacy Policy** - HIPAA-compliant privacy statement

### Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Multi-column footer with links and social media
- **HeroSection** - Reusable hero component for page headers
- **ServiceCard** - Card component for displaying services

### Design Features
- Responsive design with Tailwind CSS
- Modern color scheme (primary: #204ce5, secondary: #768fbd)
- Montserrat and Source Sans Pro fonts
- Smooth animations and transitions
- Mobile-first approach

## Tech Stack

- **Framework**: Next.js 14
- **React**: 18.2
- **Styling**: Tailwind CSS 3.3
- **Deployment Ready**: Optimized for Vercel, Netlify, or any Node.js host

## Project Structure

```
morelifeLA/
├── app/
│   ├── layout.jsx              # Root layout with Header/Footer
│   ├── globals.css             # Global styles
│   ├── page.jsx                # Home page
│   ├── about/page.jsx          # About page
│   ├── programs/page.jsx       # Programs page
│   ├── services/page.jsx       # Services page  
│   ├── contact/page.jsx        # Contact page
│   ├── testimonials/page.jsx   # Testimonials page
│   ├── faqs/page.jsx           # FAQs page
│   ├── verify-insurance/page.jsx
│   └── privacy/page.jsx
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   └── ServiceCard.jsx
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Aakash-Srinivasan02/morelifeLA.git
cd morelifeLA

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Contact Information

- **Phone**: (818) 301-1213
- **Email**: moreliferehab@gmail.com
- **Location**: Van Nuys, California

## Deployment

Ready for deployment to Vercel, Netlify, or any Node.js hosting:

```bash
# Vercel
vercel

# Netlify
npm run build
# Deploy the .next build
```

## Future Enhancements

- Blog/News section
- Photo gallery
- Online appointment booking
- CMS integration (Contentful, Sanity)
- Email notifications
- Live chat integration

## Archive Information

**Original Site**: https://moreliferecoveryla.com/
**Original CMS**: WordPress with Elementor
**Rebuild Date**: February 2026
**Framework**: Next.js 14 with Tailwind CSS

This is a complete code rewrite for personal archival and modernization purposes.