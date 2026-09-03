import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kylewlacy/vite-plugin-checker',
  description: '[Fork] Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.4.10',
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
    github: 'https://github.com/kylewlacy/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/@kylewlacy/vite-plugin-checker',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
