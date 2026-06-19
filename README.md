# Zain Ul Abidin — Software Engineer Portfolio

A premium, interactive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. This application showcases professional projects, technical skills, academic background, and includes integrated utilities like an interactive command palette and resume previewer.

## Key Features

* **Interactive Showcase**: Fully interactive project cards detailing systems design, flow architecture, and metrics for major projects like **Attestify** and **Picket**.
* **Command Palette**: Fully functional keyboard-accessible command menu (`⌘K` or `Ctrl+K`) for rapid navigation, theme toggling, and quick contact actions.
* **Interactive Terminal**: Custom terminal shell simulation highlighting developer profiles and quick contacts.
* **Theme System**: Seamless dark and light mode toggle using Tailwind CSS custom variants and persistent system preferences.
* **Dynamic Marquee Skills**: Continuous-scroll technical stack slider showcasing Languages, Frontend, Backend, Databases, Blockchain, DevOps, and Tools.
* **PDF Resume Previewer**: Built-in interactive document previewer and downloader.

## Technology Stack

* **Core**: React 19, Vite
* **Styling**: Tailwind CSS v4, Vanilla CSS
* **Animations**: Framer Motion
* **Routing**: React Router DOM (v7)
* **Icons**: React Icons, Lucide React

## Getting Started

### Prerequisites

* Node.js (v18.0.0 or higher recommended)
* npm (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/guesswhozayn/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the local development server:
```bash
npm run dev
```

### Production Build

To compile a production bundle:
```bash
npm run build
```

The output assets will be generated in the `dist` directory.

### Code Quality

To run the ESLint checker:
```bash
npm run lint
```

## Project Structure

```text
├── public/                 # Static assets (Resume PDF, etc.)
├── src/
│   ├── assets/             # Images and favicons
│   ├── components/         # React Components
│   │   └── ui/             # Reusable UI elements (cards, command palette)
│   ├── hooks/              # Custom React hooks (theme handlers)
│   ├── pages/              # Main view containers (Home, Resume)
│   ├── App.jsx             # Main Application routing entry point
│   ├── index.css           # Global stylesheet and Tailwind config imports
│   └── main.jsx            # DOM entry point
├── eslint.config.js        # ESLint Configuration
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite compilation settings
```

## License

This project is licensed under the MIT License.
