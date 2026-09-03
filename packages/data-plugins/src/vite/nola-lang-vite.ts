import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/vite',
  description: 'Vite plugin for Nola (.tsi)',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'nola',
    'vite',
    'vite-plugin',
    'llm',
    'ai',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/vite',
  },
  stats: {
    downloads: {
      monthly: 560,
      weekly: 194,
    },
  },
})
