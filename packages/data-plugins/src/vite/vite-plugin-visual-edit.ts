import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-visual-edit',
  description: 'A Vite plugin for visual editing of React components. Highlights elements, shows source locations, and enables in-browser content editing with iframe communication support.',
  icon: 'logos:vite-icon',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'visual-editing',
    'source-location',
    'iframe',
    'development-tools',
    'hot-reload',
    'babel',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Joinguyen/vite-plugin-visual-edit',
    npm: 'vite-plugin-visual-edit',
  },
  links: {
    github: 'https://github.com/Joinguyen/vite-plugin-visual-edit',
    npm: 'https://www.npmjs.com/package/vite-plugin-visual-edit',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 12,
    },
  },
})
