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
  links: {
    github: 'https://github.com/leka74/easythread',
    npm: 'https://www.npmjs.com/package/@easythread/vite',
    website: 'https://github.com/leka74/easythread#readme',
  },
  source: {
    github: 'leka74/easythread',
    npm: '@easythread/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
