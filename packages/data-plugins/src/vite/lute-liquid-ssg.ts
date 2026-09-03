import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lute/liquid-ssg',
  description: 'Server-side generation for Vite',
  version: '25.0.7',
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
    npm: 'https://www.npmjs.com/package/@lute/liquid-ssg',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
