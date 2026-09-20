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
  links: {
    npm: 'https://www.npmjs.com/package/solobot',
  },
  source: {
    npm: 'solobot',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
