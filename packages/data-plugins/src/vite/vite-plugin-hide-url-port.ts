import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hide-url-port',
  description: 'A Vite plugin to customize or hide port numbers in dev server console URLs for better Docker/DevContainer/Cloud IDE compatibility',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'url',
    'port',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/noah4520/vite-plugin-hide-url-port',
    npm: 'https://www.npmjs.com/package/vite-plugin-hide-url-port',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 3,
    },
  },
})
