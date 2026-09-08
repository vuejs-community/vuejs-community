import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-curl-logger',
  description: 'A Vite plugin that captures proxy requests as runnable curl commands and logs request/response details for debugging.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-proxy-curl-logger',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-curl-logger',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
