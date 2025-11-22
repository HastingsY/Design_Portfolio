# Portfolio Website - Local Setup Guide

## Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** or **yarn** package manager
- A code editor (VS Code recommended)

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 2. Handle Figma Assets

**IMPORTANT:** This project was built in Figma Make and uses `figma:asset/` imports for images. You have two options:

#### Option A: Replace Figma Asset Imports (Recommended)

Replace all `figma:asset/` imports with local image paths or URLs:

**Files with Figma asset imports:**
- `/components/AboutMe.tsx` - Profile picture and gallery images (lines 14, 20)
- `/components/SkillsExperience.tsx` - MSU and Utah SAGE logos (lines 20-21)
- `/components/Hero.tsx` - Hero section image
- `/imports/` directory - SVG files

**Example replacement:**
```tsx
// Before (Figma Make)
import profilePic from "figma:asset/6a2cf48d78d3a884e34b552fe4f8a6af0df23a72.png";

// After (Local)
import profilePic from "/assets/profile-pic.png";
// or use a URL
const profilePic = "https://your-image-url.com/profile.png";
```

#### Option B: Create a Figma Asset Alias (Advanced)

Add a Vite plugin to resolve `figma:asset/` paths to your local assets folder.

### 3. Add Your Assets

Place your images in the `/public/assets/` folder:

```
/public/
  /assets/
    profile-pic.png          # Your profile picture
    msu-logo.png             # Montana State University logo
    utah-sage-logo.png       # University of Utah SAGE Lab logo
    hero-image.png           # Hero section image
    cv.pdf                   # Your CV/resume (already configured)
```

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `/dist` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customization Guide

### Update Your Information

1. **Hero Section** (`/components/Hero.tsx`)
   - Tagline and description
   - Social links

2. **About Me** (`/components/AboutMe.tsx`)
   - Biography paragraphs
   - Hobby gallery images
   - CV file path (line 18)

3. **Skills & Experience** (`/components/SkillsExperience.tsx`)
   - Core skills and proficiency levels
   - Tools & technologies
   - Work experience highlights

4. **Projects** (`/components/Projects.tsx`)
   - Add your real project case studies
   - Replace placeholder data

5. **Contact Form** (`/components/ContactMe.tsx`)
   - Update form action endpoint
   - Add email service integration (e.g., FormSpree, EmailJS)

### Update Testimonials

Edit `/components/Testimonials.tsx` to add real testimonials from clients or colleagues.

---

## 🔧 Configuration Files

### `package.json`
- All dependencies and scripts
- Project metadata

### `vite.config.ts`
- Vite configuration
- Path aliases (`@/` points to root)
- Tailwind CSS plugin
- Public assets directory

### `/styles/globals.css`
- Tailwind v4 configuration
- Custom typography styles
- Color tokens and design system

---

## 📁 Project Structure

```
/
├── components/           # React components
│   ├── ui/              # ShadCN UI components
│   ├── figma/           # Figma-specific utilities
│   ├── AboutMe.tsx      # About Me page
│   ├── ContactMe.tsx    # Contact form
│   ├── Hero.tsx         # Landing hero section
│   ├── Navigation.tsx   # Main navigation
│   ├── Projects.tsx     # Projects showcase
│   ├── SkillsExperience.tsx
│   └── ...
├── imports/             # SVG imports
├── public/
│   └── assets/          # Static assets (images, CV)
├── styles/
│   └── globals.css      # Global styles & Tailwind config
├── App.tsx              # Main app with routing
├── main.tsx             # React entry point
└── index.html           # HTML entry point
```

---

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy the /dist folder to GitHub Pages
```

### Other Options
- AWS S3 + CloudFront
- DigitalOcean App Platform
- Railway
- Render

---

## 🛠️ Troubleshooting

### Images Not Loading
- Ensure images are in `/public/assets/`
- Update import paths in components
- Check image file extensions match imports

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version (v18+)

### Styling Issues
- Tailwind v4 is used - no `tailwind.config.js` needed
- All configuration is in `/styles/globals.css`
- Do not add font-size, font-weight, or line-height classes unless necessary

### Motion/Animation Issues
- This project uses `motion` (formerly Framer Motion)
- Import as: `import { motion } from 'motion/react'`

---

## 📝 Next Steps

1. ✅ Replace all Figma asset imports with your images
2. ✅ Update all personal information (name, bio, experience)
3. ✅ Add your real projects with case studies
4. ✅ Upload your CV to `/public/assets/cv.pdf`
5. ✅ Configure contact form backend
6. ✅ Add real testimonials
7. ✅ Test on mobile, tablet, and desktop
8. ✅ Run accessibility checks
9. ✅ Deploy to hosting platform
10. ✅ Connect custom domain (optional)

---

## 🆘 Support

For issues with:
- **React/Vite**: Check [Vite docs](https://vitejs.dev)
- **Tailwind CSS**: Check [Tailwind v4 docs](https://tailwindcss.com)
- **ShadCN UI**: Check [ShadCN docs](https://ui.shadcn.com)
- **Motion**: Check [Motion docs](https://motion.dev)

---

## 📄 License

This portfolio template is free to use for personal and commercial projects.

---

**Good luck with your portfolio! 🎉**
