import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@spelech/vite-plugin-theme-editor',
  description: 'Live in-browser CSS variable theme editor with AST-preserving disk sync for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'theme',
    'css-variables',
    'devtools',
    'theme-editor',
    'design-tokens',
  ],
  source: {
    github: 'spelech/vite-plugin-theme-editor',
    npm: '@spelech/vite-plugin-theme-editor',
  },
  links: {
    github: 'https://github.com/spelech/vite-plugin-theme-editor',
    npm: 'https://www.npmjs.com/package/@spelech/vite-plugin-theme-editor',
    website: 'https://github.com/spelech/vite-plugin-theme-editor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 166,
      weekly: 166,
    },
  },
})
