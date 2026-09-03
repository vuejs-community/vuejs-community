import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@figlog/vite-plugin',
  description: 'Vite plugin that injects data-log metadata attributes at build time',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'figlog',
    'vite',
    'vite-plugin',
    'logging',
    'data-attributes',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Shimsuyeon/figlog',
    npm: 'https://www.npmjs.com/package/@figlog/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 5,
    },
  },
})
