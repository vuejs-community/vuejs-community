import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-regenerator',
  description: 'A Rollup.js plugin to transform ECMAScript 6 generator and async functions',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'transform',
    'regenerator',
    'generator',
    'async',
  ],
  source: {
    github: 'notruth/rollup-plugin-regenerator',
    npm: 'rollup-plugin-regenerator',
  },
  links: {
    github: 'https://github.com/notruth/rollup-plugin-regenerator',
    npm: 'https://www.npmjs.com/package/rollup-plugin-regenerator',
    website: 'https://github.com/notruth/rollup-plugin-regenerator',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 1386,
      weekly: 385,
    },
  },
})
