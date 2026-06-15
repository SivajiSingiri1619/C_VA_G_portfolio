# Sivaji Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **MERN Stack Developer Portfolio** — Showcases projects, experience, education & certifications
- **Dark Mode / Light Mode Toggle** — Smooth animated theme switching with localStorage persistence
- **Glassmorphism Design** — Modern glass-effect UI components
- **Framer Motion Animations** — Smooth scroll-triggered animations throughout
- **Fully Responsive** — Works on desktop, tablet, and mobile
- **SEO Optimized** — Meta tags, Open Graph, and Twitter Cards

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite 8 | Build Tool |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| React Icons | Icon Library |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This project auto-deploys to **GitHub Pages** via GitHub Actions on every push to `main`.

**Live URL:** `https://<your-username>.github.io/sivaji-portfolio/`

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, TechStack, Experience, etc.
│   └── ui/           # Button, GlassCard, SectionTitle, etc.
├── data/             # Static data (projects, certifications, etc.)
├── hooks/            # Custom hooks (useDarkMode, useScrollProgress, etc.)
├── utils/            # Animation variants
├── index.css         # Design system & global styles
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## 📄 License

MIT
