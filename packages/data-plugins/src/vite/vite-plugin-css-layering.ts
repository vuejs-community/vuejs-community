import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-layering',
  description: 'Wrap CSS in cascade layers for Vite.',
  icon: 'logos:vite-icon',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rolldown-plugin',
    'vite',
    'rollup',
    'plugin',
    'css',
    'layers',
    'cascade-layers',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'kburich/vite-plugin-css-layering',
    npm: 'vite-plugin-css-layering',
  },
  links: {
    github: 'https://github.com/kburich/vite-plugin-css-layering',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-layering',
  },
  stats: {
    downloads: {
      monthly: 54,
      weekly: 12,
    },
  },
})
