import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ancon/vite-plugin-unbundle',
  description: 'There are scripts you will have to run manually to get started.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'unbundle',
  ],
  source: {
    npm: '@ancon/vite-plugin-unbundle',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@ancon/vite-plugin-unbundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 60,
      weekly: 14,
    },
  },
})
