import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nitfixer',
  description: 'Tags React, Vue and Svelte components with stable ids and emits a source manifest so nitfixer can trace feedback back to source on production builds.',
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
    'svelte',
    'vite',
    'vite-plugin',
    'vue',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/nitfixer',
  },
  source: {
    npm: 'nitfixer',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
