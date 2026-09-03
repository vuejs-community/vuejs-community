import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 't-vite-plugin-checker',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.0.1',
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
    npm: 'https://www.npmjs.com/package/t-vite-plugin-checker',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
