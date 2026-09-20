import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unpolyfill/vite-plugin',
  description: 'Vite plugin to unpolyfill your code and reduce bundle size',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'polyfill',
    'performance',
    'bundle-size',
  ],
  links: {
    github: 'https://github.com/unpolyfill/vite-plugin',
    npm: 'https://www.npmjs.com/package/@unpolyfill/vite-plugin',
    website: 'https://github.com/unpolyfill/vite-plugin#readme',
  },
  source: {
    github: 'unpolyfill/vite-plugin',
    npm: '@unpolyfill/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
