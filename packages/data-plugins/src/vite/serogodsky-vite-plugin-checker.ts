import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@serogodsky/vite-plugin-checker',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.6.2',
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
    npm: 'https://www.npmjs.com/package/@serogodsky/vite-plugin-checker',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
