/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
*/

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/CodeIT/',    // Use './' for relative paths, works well with GitHub Pages
  plugins: [vue()],
})
