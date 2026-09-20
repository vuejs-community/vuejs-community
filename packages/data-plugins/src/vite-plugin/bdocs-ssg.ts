import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bdocs/ssg',
  description: 'A Vite plugin for static site generation (SSG) with React.',
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
    'react',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@bdocs/ssg',
  },
  source: {
    npm: '@bdocs/ssg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 322,
      weekly: 195,
    },
  },
})
