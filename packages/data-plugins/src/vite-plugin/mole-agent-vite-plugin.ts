import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mole-agent/vite-plugin',
  description: 'Vite plugin: tag JSX elements with data-mole for precise code location',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'jsx',
    'mole-agent',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@mole-agent/vite-plugin',
  },
  source: {
    npm: '@mole-agent/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
