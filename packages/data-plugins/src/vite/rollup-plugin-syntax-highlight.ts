import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-syntax-highlight',
  description: 'A plugin for Vite and Rollup that highlights code using Shiki',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'shiki',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'https://www.npmjs.com/package/rollup-plugin-syntax-highlight',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
