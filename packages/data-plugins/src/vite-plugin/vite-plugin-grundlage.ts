import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-grundlage',
  description: 'Vite plugin that prerenders grundlage web components to declarative shadow DOM at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'web-components',
    'vite-plugin',
    'vite',
    'ssr',
    'prerender',
    'declarative-shadow-dom',
    'grundlage',
  ],
  source: {
    github: 'copyandpaetow/grundlage',
    npm: 'vite-plugin-grundlage',
  },
  links: {
    github: 'https://github.com/copyandpaetow/grundlage',
    npm: 'https://www.npmjs.com/package/vite-plugin-grundlage',
    website: 'https://github.com/copyandpaetow/grundlage/tree/main/prerender-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
