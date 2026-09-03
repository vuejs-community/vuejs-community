import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bdocs/ssg',
  description: 'A Vite plugin for static site generation (SSG) with React.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssg',
    'ssr',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@bdocs/ssg',
  },
  stats: {
    downloads: {
      monthly: 173,
      weekly: 27,
    },
  },
})
