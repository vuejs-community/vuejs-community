import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proxy-http2',
  description: 'Vite plugin for HTTP/2 proxy support with proper protocol handling',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'http2',
    'proxy',
  ],
  source: {
    github: 'liamdon/vite-plugin-proxy-http2',
    npm: 'vite-plugin-proxy-http2',
  },
  links: {
    github: 'https://github.com/liamdon/vite-plugin-proxy-http2',
    npm: 'https://www.npmjs.com/package/vite-plugin-proxy-http2',
    website: 'https://github.com/liamdon/vite-plugin-proxy-http2#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 61,
      weekly: 5,
    },
  },
})
