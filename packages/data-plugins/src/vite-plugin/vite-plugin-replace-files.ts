import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-replace-files',
  description: 'Replace files during Vite build - handy when replacing strings is not enough',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/elwin013/vite-plugin-replace-files',
    npm: 'https://www.npmjs.com/package/vite-plugin-replace-files',
    website: 'https://github.com/elwin013/vite-plugin-replace-files#readme',
  },
  source: {
    github: 'elwin013/vite-plugin-replace-files',
    npm: 'vite-plugin-replace-files',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 12097,
      weekly: 2386,
    },
  },
})
