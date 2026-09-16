import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nitfixer',
  description: 'Tags React components with stable ids and emits a source manifest so nitfixer can trace feedback back to source on production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'feedback',
    'nitfixer',
    'react',
    'source-map',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'nitfixer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/nitfixer',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
