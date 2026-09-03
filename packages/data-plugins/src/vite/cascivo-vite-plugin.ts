import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cascivo/vite-plugin',
  description: 'Vite plugin — wrap JS-imported third-party stylesheets into a low-priority CSS @layer',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'cascivo',
    'css',
    'css-layers',
    'vendor',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cascivo/cascivo',
    npm: 'https://www.npmjs.com/package/@cascivo/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 895,
      weekly: 174,
    },
  },
})
