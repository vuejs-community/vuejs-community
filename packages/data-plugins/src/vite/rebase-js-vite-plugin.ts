import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rebase-js/vite-plugin',
  description: 'Vite plugin that wires RebaseJS\'s Rust compiler into the transform pipeline',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'rebasejs',
    'react',
    'rust',
    'oxc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/thinkgrid-labs/rebase-js',
    npm: 'https://www.npmjs.com/package/@rebase-js/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
