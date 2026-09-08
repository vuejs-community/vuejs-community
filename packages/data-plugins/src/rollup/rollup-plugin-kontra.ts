import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-kontra',
  description: 'Rollup plugin for Kontra.js to remove unused code from Classes',
  icon: 'logos:rollupjs',
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
  source: {
    github: '',
    npm: 'rollup-plugin-kontra',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-kontra',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 9,
    },
  },
})
