import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@figlog/vite-plugin',
  description: 'Vite plugin that injects data-log metadata attributes at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'figlog',
    'vite',
    'vite-plugin',
    'logging',
    'data-attributes',
  ],
  source: {
    github: 'Shimsuyeon/figlog',
    npm: '@figlog/vite-plugin',
  },
  links: {
    github: 'https://github.com/Shimsuyeon/figlog',
    npm: 'https://www.npmjs.com/package/@figlog/vite-plugin',
    website: 'https://github.com/Shimsuyeon/figlog#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
