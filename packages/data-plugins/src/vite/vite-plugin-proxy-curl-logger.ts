import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-curl-logger',
  description: 'A Vite plugin that captures proxy requests as runnable curl commands and logs request/response details for debugging.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'curl',
    'logger',
    'debug',
    'api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-curl-logger',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
