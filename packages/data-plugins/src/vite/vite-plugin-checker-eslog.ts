import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker-eslog',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker-eslog',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
