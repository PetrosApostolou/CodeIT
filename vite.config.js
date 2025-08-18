// vite.config.js
/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['react-native']
  }
})
*/


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Detect base automatically for GitHub Pages
const isGithubPages = process.env.GITHUB_REPOSITORY
const repoName = isGithubPages ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/'

export default defineConfig({
  base: repoName,
  plugins: [vue()],
})

