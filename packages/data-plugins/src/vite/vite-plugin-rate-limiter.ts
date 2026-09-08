import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rate-limiter',
  description: 'Limit the response rate of ViteDevServer',
  icon: 'logos:vite-icon',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rate',
    'stream',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ArcherGu/vite-plugin-rate-limiter',
    npm: 'vite-plugin-rate-limiter',
  },
  links: {
    github: 'https://github.com/ArcherGu/vite-plugin-rate-limiter',
    npm: 'https://www.npmjs.com/package/vite-plugin-rate-limiter',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
