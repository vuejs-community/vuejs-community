import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-kontra',
  description: 'Rollup plugin for Kontra.js to remove unused code from Classes',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'kontra',
    'js13k',
  ],
  source: {
    npm: 'rollup-plugin-kontra',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-kontra',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 7,
    },
  },
})
