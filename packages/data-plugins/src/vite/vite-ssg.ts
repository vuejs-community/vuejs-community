import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-ssg',
  description: 'Server-side generation for Vite',
  version: '28.3.0',
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
    github: 'https://github.com/antfu-collective/vite-ssg',
    npm: 'https://www.npmjs.com/package/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 215358,
      weekly: 62366,
    },
  },
})
