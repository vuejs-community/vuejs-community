import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-banner',
  description: 'A banner plugin for Vite. Adds a banner to the top of each generated chunk.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite plugin',
    'vite banner',
  ],
  source: {
    github: 'chengpeiquan/vite-plugin-banner',
    npm: 'vite-plugin-banner',
  },
  links: {
    github: 'https://github.com/chengpeiquan/vite-plugin-banner',
    npm: 'https://www.npmjs.com/package/vite-plugin-banner',
    website: 'https://github.com/chengpeiquan/vite-plugin-banner',
  },
  stats: {
    stars: 113,
    downloads: {
      monthly: 63564,
      weekly: 15798,
    },
  },
})
