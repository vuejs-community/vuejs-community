import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mussi/vite-ssg',
  description: 'Server-side generation for Vite',
  version: '0.14.8',
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
    github: 'https://github.com/ElMassimo/vite-ssg',
    npm: 'https://www.npmjs.com/package/@mussi/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
