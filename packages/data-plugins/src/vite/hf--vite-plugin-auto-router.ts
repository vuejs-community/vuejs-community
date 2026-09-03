import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@hf-/vite-plugin-auto-router',
  description: 'A Vite plugin for auto-generating Vue router configuration based on file system',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue-router',
    'auto-router',
    'file-system-routing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@hf-/vite-plugin-auto-router',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
