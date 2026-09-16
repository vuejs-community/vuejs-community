import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@easythread/vite',
  description: 'Vite plugin for easythread - automatic Web Worker generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'web-workers',
    'easythread',
  ],
  source: {
    github: 'leka74/easythread',
    npm: '@easythread/vite',
  },
  links: {
    github: 'https://github.com/leka74/easythread',
    npm: 'https://www.npmjs.com/package/@easythread/vite',
    website: 'https://github.com/leka74/easythread#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
