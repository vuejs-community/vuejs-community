import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@effuse/compiler',
  description: 'An optimized JSX/TSX transformer that automatically handles reactive signal access, reducing boilerplate without impacting performance.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'effuse',
    'compiler',
    'jsx',
    'signals',
    'reactivity',
    'vite-plugin',
    'babel',
    'transform',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chrismichaelps/effuse',
    npm: 'https://www.npmjs.com/package/@effuse/compiler',
  },
  stats: {
    downloads: {
      monthly: 121,
      weekly: 27,
    },
  },
})
