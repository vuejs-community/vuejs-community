import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rfirefly/vite-ssg',
  description: 'Server-side generation for Vite',
  version: '1.1.0',
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
    github: 'https://github.com/rfirefly/vite-ssg',
    npm: 'https://www.npmjs.com/package/@rfirefly/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 47,
      weekly: 7,
    },
  },
})
