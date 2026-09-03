import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mole-agent/vite-plugin',
  description: 'Vite plugin: tag JSX elements with data-mole for precise code location',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'jsx',
    'mole-agent',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@mole-agent/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 4,
    },
  },
})
