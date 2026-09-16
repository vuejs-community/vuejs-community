import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@live-visual-edit/vite-plugin',
  description: 'Vite plugin that injects data-live-id attributes into JSX elements for live-visual-edit',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'live-edit',
    'vite-plugin',
    'vite',
    'react',
    'jsx',
    'visual-editor',
  ],
  source: {
    github: 'mir-dev/live-visual-edit',
    npm: '@live-visual-edit/vite-plugin',
  },
  links: {
    github: 'https://github.com/mir-dev/live-visual-edit',
    npm: 'https://www.npmjs.com/package/@live-visual-edit/vite-plugin',
    website: 'https://github.com/mir-dev/live-visual-edit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
