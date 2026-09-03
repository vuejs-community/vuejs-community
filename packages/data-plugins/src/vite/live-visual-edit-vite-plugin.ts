import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@live-visual-edit/vite-plugin',
  description: 'Vite plugin that injects data-live-id attributes into JSX elements for live-visual-edit',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'live-edit',
    'vite-plugin',
    'vite',
    'react',
    'jsx',
    'visual-editor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mir-dev/live-visual-edit',
    npm: 'https://www.npmjs.com/package/@live-visual-edit/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
