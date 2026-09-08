import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-http2',
  description: 'Vite plugin for HTTP/2 proxy support with proper protocol handling',
  icon: 'logos:vite-icon',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'http2',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'liamdon/vite-plugin-proxy-http2',
    npm: 'vite-plugin-proxy-http2',
  },
  links: {
    github: 'https://github.com/liamdon/vite-plugin-proxy-http2',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-http2',
  },
  stats: {
    downloads: {
      monthly: 96,
      weekly: 8,
    },
  },
})
