import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pokt/vite-plugin-git-info',
  description: 'inject git info (dev & build)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: '@pokt/vite-plugin-git-info',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@pokt/vite-plugin-git-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
