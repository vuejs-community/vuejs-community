import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-http2-proxy',
  description: 'Vite proxy with HTTP2 support',
  icon: 'logos:vite-icon',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'http2',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'swandir/vite-plugin-http2-proxy',
    npm: 'vite-plugin-http2-proxy',
  },
  links: {
    github: 'https://github.com/swandir/vite-plugin-http2-proxy',
    npm: 'https://www.npmjs.com/package/vite-plugin-http2-proxy',
  },
  stats: {
    downloads: {
      monthly: 2245,
      weekly: 750,
    },
  },
})
