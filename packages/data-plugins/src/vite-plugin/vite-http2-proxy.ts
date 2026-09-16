import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-http2-proxy',
  description: 'An easy to use plugin to solve the problem that vite does not support http2Proxy.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'http2proxy',
    'http2-proxy',
    'devcert',
    'vite-plugin',
    'http2',
  ],
  source: {
    github: 'BanShan-Alec/vite-plugin-http2Proxy',
    npm: 'vite-http2-proxy',
  },
  links: {
    github: 'https://github.com/BanShan-Alec/vite-plugin-http2Proxy',
    npm: 'https://www.npmjs.com/package/vite-http2-proxy',
    website: 'https://github.com/BanShan-Alec/vite-plugin-http2Proxy#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
