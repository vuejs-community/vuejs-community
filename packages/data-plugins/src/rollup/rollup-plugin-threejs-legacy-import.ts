import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-threejs-legacy-import',
  description: 'A Rollup plugin to transform Three.js legacy files (non ES6 modules) to ES6 modules',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'three.js',
    'transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-legacy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-threejs-legacy-import',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 6,
    },
  },
})
