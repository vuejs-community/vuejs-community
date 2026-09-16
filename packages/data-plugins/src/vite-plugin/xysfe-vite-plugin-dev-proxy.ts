import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xysfe/vite-plugin-dev-proxy',
  description: 'A Vite plugin for development environment proxy that automatically proxies remote server requests and handles HTML responses',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'proxy',
    'dev-proxy',
    'development',
    'html-proxy',
    'cookie',
    'redirect',
  ],
  source: {
    npm: '@xysfe/vite-plugin-dev-proxy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@xysfe/vite-plugin-dev-proxy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 3,
    },
  },
})
