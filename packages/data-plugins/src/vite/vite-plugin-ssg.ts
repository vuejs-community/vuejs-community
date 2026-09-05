import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssg',
  description: 'A Vite plugin for static site generation with React and island architecture',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'static-site-generation',
    'react',
    'islands',
    'partial-hydration',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/The-CodeCave/vite-plugin-ssg',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssg',
  },
  stats: {
    downloads: {
      monthly: 1645,
      weekly: 294,
    },
  },
})
