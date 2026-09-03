import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@devmove/vite-plugin',
  description: 'Vite plugin for DevMove — visual drag-and-drop layout editing with source code updates',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'devmove',
    'drag-and-drop',
    'visual-editor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@devmove/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
