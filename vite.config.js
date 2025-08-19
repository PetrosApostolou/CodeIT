import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Detect if deploying to GitHub Pages
const isGithubPages = !!process.env.GITHUB_REPOSITORY
const repoName = isGithubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/'

export default defineConfig({
  base: repoName,      // Correctly sets relative paths for assets
  plugins: [vue()],
  build: {
    outDir: 'dist',     // default, you can customize
  }
})


