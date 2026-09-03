import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dts/vite-ssg',
  description: 'Server-side generation for Vite (dts fork)',
  version: '0.15.5',
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
    npm: 'https://www.npmjs.com/package/@dts/vite-ssg',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
