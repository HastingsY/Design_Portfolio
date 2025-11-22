import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

/**
 * Vite Configuration for Portfolio Website
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. INSTALL DEPENDENCIES:
 *    Run: npm install (or pnpm install / yarn install)
 * 
 * 2. HANDLE FIGMA ASSETS:
 *    This project uses `figma:asset/` imports that won't work locally.
 *    You need to replace them with local images or URLs:
 * 
 *    Files to update:
 *    - /components/AboutMe.tsx (lines 14, 20) - profile pic, logos
 *    - /components/SkillsExperience.tsx (lines 20-21) - MSU and Utah logos
 *    - /components/Hero.tsx - hero image
 * 
 *    Example replacement:
 *    Before: import profilePic from "figma:asset/6a2cf48d78d3a884e34b552fe4f8a6af0df23a72.png";
 *    After:  import profilePic from "/assets/profile-pic.png";
 *    Or:     const profilePic = "https://your-url.com/image.png";
 * 
 * 3. ADD YOUR IMAGES:
 *    Place images in /public/assets/ directory:
 *    - profile-pic.png
 *    - msu-logo.png
 *    - utah-sage-logo.png
 *    - hero-image.png
 *    - cv.pdf (your resume)
 * 
 * 4. START DEVELOPMENT SERVER:
 *    Run: npm run dev
 *    Visit: http://localhost:5173
 * 
 * 5. BUILD FOR PRODUCTION:
 *    Run: npm run build
 *    Output: /dist folder (ready to deploy)
 * 
 * DEPLOYMENT:
 *    - Vercel: Import GitHub repo (auto-detects Vite)
 *    - Netlify: Build command: npm run build | Publish dir: dist
 *    - GitHub Pages: Deploy /dist folder
 * 
 * For more details, see SETUP_GUIDE.md
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tabs'],
        },
      },
    },
  },
})