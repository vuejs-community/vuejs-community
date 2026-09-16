import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-debug-meta',
  description: 'Vite plugin to inject debug metadata (file paths and component names) into React JSX/TSX elements for inspect-on-click functionality.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-debug-meta',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-debug-meta',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 60,
      weekly: 3,
    },
  },
})
