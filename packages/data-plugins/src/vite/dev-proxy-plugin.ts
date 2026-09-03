import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dev-proxy-plugin',
  description: 'A Vite plugin for development environment proxy that automatically proxies remote server requests and handles HTML responses',
  version: '1.0.1',
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
    github: 'https://github.com/CNLHB/dev-proxy-plugin',
    npm: 'https://www.npmjs.com/package/dev-proxy-plugin',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
