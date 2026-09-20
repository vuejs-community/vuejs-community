import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dev-proxy-plugin',
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
  links: {
    github: 'https://github.com/CNLHB/dev-proxy-plugin',
    npm: 'https://www.npmjs.com/package/dev-proxy-plugin',
    website: 'https://github.com/CNLHB/dev-proxy-plugin#readme',
  },
  source: {
    github: 'CNLHB/dev-proxy-plugin',
    npm: 'dev-proxy-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
