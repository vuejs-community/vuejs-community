import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gazatu/vite-ssg',
  description: 'https://github.com/antfu/vite-ssg but for everyone (including your mom)',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/GaZaTu/vite-ssg',
    npm: 'https://www.npmjs.com/package/@gazatu/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
