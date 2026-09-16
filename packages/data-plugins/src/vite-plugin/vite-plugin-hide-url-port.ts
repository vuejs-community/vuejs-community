import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hide-url-port',
  description: 'A Vite plugin to customize or hide port numbers in dev server console URLs for better Docker/DevContainer/Cloud IDE compatibility',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'url',
    'port',
  ],
  source: {
    github: 'noah4520/vite-plugin-hide-url-port',
    npm: 'vite-plugin-hide-url-port',
  },
  links: {
    github: 'https://github.com/noah4520/vite-plugin-hide-url-port',
    npm: 'https://www.npmjs.com/package/vite-plugin-hide-url-port',
    website: 'https://github.com/noah4520/vite-plugin-hide-url-port#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
