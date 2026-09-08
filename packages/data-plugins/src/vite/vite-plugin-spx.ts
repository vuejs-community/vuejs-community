import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spx',
  description: 'Vite plugin to enable its use with SPX Graphics Controller',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'dan-shields/vite-plugin-spx',
    npm: 'vite-plugin-spx',
  },
  links: {
    github: 'https://github.com/dan-shields/vite-plugin-spx',
    npm: 'https://www.npmjs.com/package/vite-plugin-spx',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
