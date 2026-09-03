import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-ssg-ionic',
  description: 'Server-side generation for Vite',
  version: '0.23.7',
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
    github: 'https://github.com/antfu/vite-ssg',
    npm: 'https://www.npmjs.com/package/vite-ssg-ionic',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
