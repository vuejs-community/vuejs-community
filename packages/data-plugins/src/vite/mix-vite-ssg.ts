import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'mix-vite-ssg',
  description: 'Server-side generation for Vite',
  version: '0.0.12',
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
    npm: 'https://www.npmjs.com/package/mix-vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 15,
    },
  },
})
