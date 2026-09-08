import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-universal',
  description: 'Plugin that introduce advanced configurations for pages, allowing to mix SSG, SPA and SSG+JS pages.',
  icon: 'logos:vite-icon',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'SSG',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-universal',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-universal',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 0,
    },
  },
})
