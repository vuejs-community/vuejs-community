import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zod-codepen/vite-plugin',
  description: 'Vite plugin to decouple Zod schemas from heavy dependencies',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zod',
    'schema',
    'code-generation',
    'typescript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@zod-codepen/vite-plugin',
  },
  source: {
    npm: '@zod-codepen/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
