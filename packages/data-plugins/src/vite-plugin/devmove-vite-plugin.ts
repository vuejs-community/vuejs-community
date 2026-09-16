import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devmove/vite-plugin',
  description: 'Vite plugin for DevMove — visual drag-and-drop layout editing with source code updates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devmove',
    'drag-and-drop',
    'visual-editor',
  ],
  source: {
    npm: '@devmove/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@devmove/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
