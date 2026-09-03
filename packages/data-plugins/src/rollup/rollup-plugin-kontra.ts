import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-kontra',
  description: 'Rollup plugin for Kontra.js to remove unused code from Classes',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'kontra',
    'js13k',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-kontra',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 7,
    },
  },
})
