import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-layering',
  description: 'Wrap CSS in cascade layers for Vite.',
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
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/kburich/vite-plugin-css-layering',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-layering',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 16,
    },
  },
})
