import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-curl-logger',
  description: 'A Vite plugin that captures proxy requests as runnable curl commands and logs request/response details for debugging.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'curl',
    'logger',
    'debug',
    'api',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-curl-logger',
  },
  source: {
    npm: 'vite-plugin-proxy-curl-logger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
