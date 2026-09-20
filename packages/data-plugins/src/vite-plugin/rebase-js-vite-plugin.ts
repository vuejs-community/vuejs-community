import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rebase-js/vite-plugin',
  description: 'Vite plugin that wires RebaseJS\'s Rust compiler into the transform pipeline',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'rebasejs',
    'react',
    'rust',
    'oxc',
  ],
  links: {
    github: 'https://github.com/thinkgrid-labs/rebase-js',
    npm: 'https://www.npmjs.com/package/@rebase-js/vite-plugin',
    website: 'https://github.com/thinkgrid-labs/rebase-js#readme',
  },
  source: {
    github: 'thinkgrid-labs/rebase-js',
    npm: '@rebase-js/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
