import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'flb-vite-plugin-checker',
  description: 'Vite plugin that runs TypeScript type checker on a separate process.',
  version: '0.3.4',
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
    npm: 'https://www.npmjs.com/package/flb-vite-plugin-checker',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
