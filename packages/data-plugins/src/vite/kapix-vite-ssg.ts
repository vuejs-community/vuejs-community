import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'kapix-vite-ssg',
  description: 'Server-side generation for Vite',
  version: '0.22.31',
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
    npm: 'https://www.npmjs.com/package/kapix-vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 107,
      weekly: 9,
    },
  },
})
