import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-next-font',
  description: 'Use Next.js\'s Font API in Vite environments.',
  icon: 'logos:vite-icon',
  version: '1.0.0-beta.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kijv/next-font',
    npm: 'vite-plugin-next-font',
  },
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/vite-plugin-next-font',
  },
  stats: {
    downloads: {
      monthly: 4029,
      weekly: 1522,
    },
  },
})
