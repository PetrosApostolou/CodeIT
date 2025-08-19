import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Detect if deploying to GitHub Pages
const isGithubPages = !!process.env.GITHUB_REPOSITORY
const repoName = isGithubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/'

export default defineConfig({
  base: './',       // Use relative paths for GitHub Pages
  plugins: [vue()],
  build: {
    outDir: 'dist',  // Default output folder
  }
})
