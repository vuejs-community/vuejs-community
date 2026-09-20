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
  links: {
    github: 'https://github.com/spelech/vite-plugin-theme-editor',
    npm: 'https://www.npmjs.com/package/@spelech/vite-plugin-theme-editor',
    website: 'https://github.com/spelech/vite-plugin-theme-editor#readme',
  },
  source: {
    github: 'spelech/vite-plugin-theme-editor',
    npm: '@spelech/vite-plugin-theme-editor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 166,
      weekly: 166,
    },
  },
})
