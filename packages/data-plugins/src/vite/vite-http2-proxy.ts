import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-http2-proxy',
  description: 'An easy to use plugin to solve the problem that vite does not support http2Proxy.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'http2proxy',
    'http2-proxy',
    'devcert',
    'vite-plugin',
    'http2',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/BanShan-Alec/vite-plugin-http2Proxy',
    npm: 'https://www.npmjs.com/package/vite-http2-proxy',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
