import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xysfe/vite-plugin-dev-proxy',
  description: 'A Vite plugin for development environment proxy that automatically proxies remote server requests and handles HTML responses',
  version: '1.0.8',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@xysfe/vite-plugin-dev-proxy',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 4,
    },
  },
})
