import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-asset',
  description: 'Manage your assets of Vite plugins',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'wsvaio/vite-plugin-asset',
    npm: 'vite-plugin-asset',
  },
  links: {
    github: 'https://github.com/wsvaio/vite-plugin-asset',
    npm: 'https://www.npmjs.com/package/vite-plugin-asset',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
