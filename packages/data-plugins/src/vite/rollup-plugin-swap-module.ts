import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-swap-module',
  description: 'A rollup plugin to swap a module for another',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mendlero/rollup-vite-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-swap-module',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
