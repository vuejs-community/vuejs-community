import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-grundlage',
  description: 'Vite plugin that prerenders grundlage web components to declarative shadow DOM at build time.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'web-components',
    'vite-plugin',
    'vite',
    'ssr',
    'prerender',
    'declarative-shadow-dom',
    'grundlage',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/copyandpaetow/grundlage',
    npm: 'https://www.npmjs.com/package/vite-plugin-grundlage',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
