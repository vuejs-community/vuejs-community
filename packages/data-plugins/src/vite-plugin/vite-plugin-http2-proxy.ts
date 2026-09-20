import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-http2-proxy',
  description: 'Vite proxy with HTTP2 support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'http2',
    'proxy',
  ],
  links: {
    github: 'https://github.com/swandir/vite-plugin-http2-proxy',
    npm: 'https://www.npmjs.com/package/vite-plugin-http2-proxy',
    website: 'https://github.com/swandir/vite-plugin-http2-proxy',
  },
  source: {
    github: 'swandir/vite-plugin-http2-proxy',
    npm: 'vite-plugin-http2-proxy',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 2037,
      weekly: 237,
    },
  },
})
