import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@arijs/vite-ssg',
  description: 'Server-side generation for Vite',
  version: '0.15.6-ari.1',
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
    github: 'https://github.com/arijs/vite-ssg',
    npm: 'https://www.npmjs.com/package/@arijs/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
