import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-debug-meta',
  description: 'Vite plugin to inject debug metadata (file paths and component names) into React JSX/TSX elements for inspect-on-click functionality.',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-debug',
    'react',
    'react-debug',
    'inspect',
    'inspect-element',
    'inspector',
    'click-to-component',
    'open-in-editor',
    'babel',
    'ast',
    'dx',
    'development-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-debug-meta',
  },
  stats: {
    downloads: {
      monthly: 182,
      weekly: 15,
    },
  },
})
