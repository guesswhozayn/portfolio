# Portfolio

This repository contains the personal software engineering portfolio website for Zain, a Full-Stack and AI Systems Engineer. Built with React 19, Vite 7, Tailwind CSS v4, and Framer Motion, the site showcases production projects, architectural case studies, technical competencies, and professional services.

## Table of Contents

- Overview
- Visual Design and Architecture
- Core Sections and Components
- Technology Stack
- Project Directory Layout
- Featured Projects
- Getting Started
- Available Scripts
- Deployment
- License

## Overview

The portfolio is designed to present software engineering capabilities with clarity, performance, and visual polish. It highlights experience in building scalable web applications, integrating large language models, orchestrating autonomous agent pipelines, and designing robust backend architectures.

## Visual Design and Architecture

- Atmospheric Lighting: Custom multi-stop radial and linear CSS gradients that produce a subtle, luminous depth on both dark and light backdrops.
- Fluid Typography: Scalable type scales utilizing high-contrast headings, readable body typography, and monospaced technical metadata tags.
- Micro-Interactions: Framer Motion spring physics on hover states, dynamic page transitions, and smooth scroll navigation.
- Component Modularity: Decoupled presentation components with dedicated routing for individual project deep dives and service offerings.

## Core Sections and Components

### Header and Navigation (`Navbar.jsx`)
- Fixed navigation bar with glassmorphism backdrop blur.
- Quick navigation links linking smoothly to Work, About, Services, and Contact sections.

### Hero Section (`Hero.jsx`)
- Prominent display typography communicating core engineering philosophy.
- Multi-stop atmospheric gradient with responsive layout.
- Partner and client brand logo carousel.

### About Me (`About.jsx`)
- Executive summary of technical focus, background, and philosophy.
- Quick stats grid indicating base location (Islamabad, PK), professional experience (2+ years), current focus (AI and Full-stack), and active engagement status.

### Featured Projects (`Projects.jsx`)
- Interactive project cards highlighting key products, technology badges, live demonstration links, and architectural notes.
- Dedicated project page views (`ProjectPage.jsx`) providing comprehensive technical writeups.

### Technical Services (`Services.jsx` and `ServicePage.jsx`)
- Comprehensive overview of engineering services:
  - Full-Stack Web Development: Scalable React, Next.js, and Node.js architectures.
  - AI and LLM Integration: Custom prompts, retrieval pipelines, and model fine-tuning.
  - Autonomous Agent Pipelines: Multi-agent orchestration, queuing, and background processing.
  - API and Database Design: Relational and document store modeling, caching, and rate limiting.

### Skills and Tooling (`Skills.jsx`)
- Categorized skill matrix covering:
  - Languages: JavaScript (ESNext), TypeScript, Python, SQL, Solidity.
  - Frontend: React, Next.js, Tailwind CSS, Vite, HTML5, CSS3.
  - Backend: Node.js, Express, REST APIs, WebSockets, BullMQ.
  - Databases: PostgreSQL, MongoDB, Redis, Supabase.
  - AI and Tools: OpenAI, Anthropic, Google Gemini, OpenRouter, Git, Docker.

### FAQ (`FAQ.jsx`)
- Accordion FAQ addressing project workflows, delivery timelines, and technology choices.

## Technology Stack

- Core Framework: React 19.1, React DOM 19.1
- Bundler and Tooling: Vite 7.0
- Routing: React Router v7 (`react-router-dom`)
- Styling Engine: Tailwind CSS v4 (`@tailwindcss/vite`)
- Animation: Framer Motion 12.23
- Iconography: React Icons (`react-icons`)
- Code Quality: ESLint 9

## Project Directory Layout

```
portfolio/
├── package.json               # Manifest, dependencies, and build scripts
├── vite.config.js             # Vite configuration with Tailwind CSS plugin
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML shell and metadata
├── public/                    # Static assets, favicons, and manifest files
└── src/
    ├── App.jsx                # Route declarations and layout container
    ├── main.jsx               # React DOM render entry point
    ├── index.css              # Tailwind imports and global style definitions
    ├── assets/                # Local images, brand logos, and icons
    ├── pages/                 # Full-page route views
    │   ├── HomePage.jsx       # Consolidated single-page portfolio layout
    │   ├── ProjectPage.jsx    # Dedicated individual project deep dive
    │   └── ServicePage.jsx    # Dedicated individual service detail page
    └── components/            # Reusable UI sections
        ├── Navbar.jsx         # Header navigation
        ├── Hero.jsx           # Hero banner and typography
        ├── About.jsx          # Professional background and key metrics
        ├── Projects.jsx       # Featured project showcase
        ├── Services.jsx       # Service offerings overview
        ├── Skills.jsx         # Technical proficiency matrix
        ├── FAQ.jsx            # Frequently asked questions accordion
        ├── Spotlight.jsx      # Cursor-following light effect
        └── Footer.jsx         # Contact links and copyright notices
```

## Featured Projects

The portfolio showcases several production and open-source applications:
- Attestify: Decentralized blockchain credential issuance and verification platform built with Ethereum, IPFS, Express, and React.
- Picket: Candidate screening and recruitment intelligence platform powered by multi-agent AI verification pipelines.
- Outlio: AI job application assistant for LinkedIn scraping, resume tailoring, LaTeX compilation, and cold outreach.
- Digestible: Media digestion platform converting video reels into structured written summaries using Google Gemini and Supabase.
- Homivio: Modern e-commerce storefront featuring Stripe checkout, dynamic catalogs, and local state persistence.
- Foundrium: Creative technology laboratory web application combining Three.js 3D scenes and Remotion video generation.

## Getting Started

### Prerequisites
- Node.js version 18.x or higher
- npm version 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## Available Scripts

- `npm run dev`: Launches Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles production build into `dist/`.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to check for code quality and style issues.

## Deployment

The application compiles into static HTML, JavaScript, and CSS assets suitable for deployment on any modern edge hosting platform (Vercel, Netlify, Cloudflare Pages, GitHub Pages):

```bash
npm run build
```

Deploy the generated `dist/` directory directly to your hosting provider.

## License

This project is private and proprietary.
