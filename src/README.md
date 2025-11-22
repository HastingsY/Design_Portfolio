# Yvette D. Hastings - Portfolio Website

A fully responsive, accessible UI/UX design portfolio showcasing skills, experience, projects, and professional background.

## ✨ Features

- **Hero Section** - Dynamic landing with tagline and social links
- **About Me** - Biography, hobbies gallery, CV viewer modal
- **Skills & Experience** - Core competencies, tools/technologies, work history
- **Projects** - Detailed case studies with 5-phase design process (empathize, define, ideate, prototype, test)
- **Contact Form** - Functional contact form with validation
- **Testimonials** - Client and colleague testimonials
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Accessible** - WCAG AA compliant with proper ARIA labels, keyboard navigation, semantic HTML
- **Premium Animations** - Motion animations throughout

## 🚀 Quick Start

### Prerequisites
- Node.js v18+ 
- npm/pnpm/yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Replace Figma asset imports (see SETUP_GUIDE.md)

# 3. Add your images to /public/assets/

# 4. Start dev server
npm run dev
```

Visit `http://localhost:5173`

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

Deploy the `/dist` folder to Vercel, Netlify, GitHub Pages, or any static host.

## 📖 Documentation

See **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** for detailed setup instructions, customization guide, and troubleshooting.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Motion** (Framer Motion) - Animations
- **ShadCN UI** - Component library
- **React Router** - Navigation
- **Lucide React** - Icons

## 📁 Project Structure

```
/components/        # React components
  /ui/             # ShadCN UI components
  AboutMe.tsx      # About page
  ContactMe.tsx    # Contact form
  Hero.tsx         # Hero section
  Navigation.tsx   # Navigation bar
  Projects.tsx     # Projects showcase
  SkillsExperience.tsx # Skills & work history
/public/assets/    # Static assets (images, CV)
/styles/          # Global styles
App.tsx           # Main app component
main.tsx          # Entry point
```

## 📝 Customization

1. Update personal info in all components
2. Replace Figma asset imports with your images
3. Add your projects to `Projects.tsx`
4. Upload your CV to `/public/assets/cv.pdf`
5. Configure contact form backend
6. Update testimonials with real feedback

## 🆘 Support

- **Vite Issues**: [Vite Docs](https://vitejs.dev)
- **Tailwind CSS**: [Tailwind Docs](https://tailwindcss.com)
- **ShadCN UI**: [ShadCN Docs](https://ui.shadcn.com)
- **Motion**: [Motion Docs](https://motion.dev)

## 📄 License

Free to use for personal and commercial projects.

---

**Built with Figma Make** 🎨
