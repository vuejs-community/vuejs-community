import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hf-/vite-plugin-auto-router',
  description: 'A Vite plugin for auto-generating Vue router configuration based on file system',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue-router',
    'auto-router',
    'file-system-routing',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@hf-/vite-plugin-auto-router',
  },
  source: {
    npm: '@hf-/vite-plugin-auto-router',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
