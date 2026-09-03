import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@reatom/vite',
  description: 'Vite plugin for Reatom routing and JSX hot module replacement',
  version: '1001.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
    'routing',
    'jsx',
    'reatom',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/reatom/reatom',
    npm: 'https://www.npmjs.com/package/@reatom/vite',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 9,
    },
  },
})
