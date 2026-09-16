import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rate-limiter',
  description: 'Limit the response rate of ViteDevServer',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rate',
    'stream',
  ],
  source: {
    github: 'ArcherGu/vite-plugin-rate-limiter',
    npm: 'vite-plugin-rate-limiter',
  },
  links: {
    github: 'https://github.com/ArcherGu/vite-plugin-rate-limiter',
    npm: 'https://www.npmjs.com/package/vite-plugin-rate-limiter',
    website: 'https://github.com/ArcherGu/vite-plugin-rate-limiter#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 218,
      weekly: 11,
    },
  },
})
