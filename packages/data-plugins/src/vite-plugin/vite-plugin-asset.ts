import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-asset',
  description: 'Manage your assets of Vite plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'wsvaio/vite-plugin-asset',
    npm: 'vite-plugin-asset',
  },
  links: {
    github: 'https://github.com/wsvaio/vite-plugin-asset',
    npm: 'https://www.npmjs.com/package/vite-plugin-asset',
    website: 'https://github.com/wsvaio/vite-plugin-asset#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
