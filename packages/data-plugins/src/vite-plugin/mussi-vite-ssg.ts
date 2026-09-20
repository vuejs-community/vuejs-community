import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mussi/vite-ssg',
  description: 'Server-side generation for Vite',
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
    github: 'https://github.com/ElMassimo/vite-ssg',
    npm: 'https://www.npmjs.com/package/@mussi/vite-ssg',
    website: 'https://github.com/ElMassimo/vite-ssg',
  },
  source: {
    github: 'ElMassimo/vite-ssg',
    npm: '@mussi/vite-ssg',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
