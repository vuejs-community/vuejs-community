import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gazatu/vite-ssg',
  description: 'https://github.com/antfu/vite-ssg but for everyone (including your mom)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  links: {
    github: 'https://github.com/GaZaTu/vite-ssg',
    npm: 'https://www.npmjs.com/package/@gazatu/vite-ssg',
    website: 'https://github.com/GaZaTu/vite-ssg#readme',
  },
  source: {
    github: 'GaZaTu/vite-ssg',
    npm: '@gazatu/vite-ssg',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
