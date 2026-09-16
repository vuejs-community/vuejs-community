import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'solobot',
  description: 'solobot package',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'solobot',
    'agent',
  ],
  source: {
    npm: 'solobot',
  },
  links: {
    npm: 'https://www.npmjs.com/package/solobot',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
