import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cascivo/vite-plugin',
  description: 'Vite plugin — wrap JS-imported third-party stylesheets into a low-priority CSS @layer',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cascivo',
    'css',
    'css-layers',
    'vendor',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cascivo/cascivo',
    npm: 'https://www.npmjs.com/package/@cascivo/vite-plugin',
    website: 'https://github.com/cascivo/cascivo/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'cascivo/cascivo',
    npm: '@cascivo/vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 594,
      weekly: 31,
    },
  },
})
