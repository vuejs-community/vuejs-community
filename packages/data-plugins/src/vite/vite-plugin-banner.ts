import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-banner',
  description: 'A banner plugin for Vite. Adds a banner to the top of each generated chunk.',
  icon: 'logos:vite-icon',
  version: '0.8.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite banner',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'chengpeiquan/vite-plugin-banner',
    npm: 'vite-plugin-banner',
  },
  links: {
    github: 'https://github.com/chengpeiquan/vite-plugin-banner',
    npm: 'https://www.npmjs.com/package/vite-plugin-banner',
  },
  stats: {
    downloads: {
      monthly: 67147,
      weekly: 15945,
    },
  },
})
