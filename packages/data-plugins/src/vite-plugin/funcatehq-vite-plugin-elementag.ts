import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@funcatehq/vite-plugin-elementag',
  description: 'Vite plugin that tags JSX elements with data attributes for visual editing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'visual-editor',
    'element-tagging',
    'jsx',
    'react',
  ],
  source: {
    npm: '@funcatehq/vite-plugin-elementag',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@funcatehq/vite-plugin-elementag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
