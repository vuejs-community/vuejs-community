import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-emt',
  description: 'emt support for vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'emt',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-emt',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-emt',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
