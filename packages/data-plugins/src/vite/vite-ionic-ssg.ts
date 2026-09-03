import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-ionic-ssg',
  description: 'Server-side generation for Vite',
  version: '0.23.8',
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
    npm: 'https://www.npmjs.com/package/vite-ionic-ssg',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
