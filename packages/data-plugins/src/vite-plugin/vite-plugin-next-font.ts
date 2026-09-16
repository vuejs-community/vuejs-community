import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-next-font',
  description: 'Use Next.js\'s Font API in Vite environments.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'kijv/next-font',
    npm: 'vite-plugin-next-font',
  },
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/vite-plugin-next-font',
    website: 'https://github.com/kijv/next-font#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 5509,
      weekly: 1288,
    },
  },
})
