import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssg',
  description: 'A Vite plugin for static site generation with React and island architecture',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'static-site-generation',
    'react',
    'islands',
    'partial-hydration',
  ],
  source: {
    github: 'The-CodeCave/vite-plugin-ssg',
    npm: 'vite-plugin-ssg',
  },
  links: {
    github: 'https://github.com/The-CodeCave/vite-plugin-ssg',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssg',
    website: 'https://github.com/The-CodeCave/vite-plugin-ssg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 925,
      weekly: 111,
    },
  },
})
