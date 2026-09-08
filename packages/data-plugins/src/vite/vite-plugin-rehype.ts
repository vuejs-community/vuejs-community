import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rehype',
  description: 'Vite plugin for transforming HTML using Rehype',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rehype',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'keplersj/vite-plugin-rehype',
    npm: 'vite-plugin-rehype',
  },
  links: {
    github: 'https://github.com/keplersj/vite-plugin-rehype',
    npm: 'https://www.npmjs.com/package/vite-plugin-rehype',
  },
  stats: {
    downloads: {
      monthly: 98,
      weekly: 49,
    },
  },
})
