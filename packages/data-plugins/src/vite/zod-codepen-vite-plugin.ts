import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zod-codepen/vite-plugin',
  description: 'Vite plugin to decouple Zod schemas from heavy dependencies',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zod',
    'schema',
    'code-generation',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@zod-codepen/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 8,
    },
  },
})
