import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unpolyfill/vite-plugin',
  description: 'Vite plugin to unpolyfill your code and reduce bundle size',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'polyfill',
    'performance',
    'bundle-size',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/unpolyfill/vite-plugin',
    npm: 'https://www.npmjs.com/package/@unpolyfill/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 4,
    },
  },
})
