import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-sprite',
  description: 'Create external svg sprite from your bundle using Rollup',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'sprite',
    'svg-sprite',
    'svgo',
    'create',
    'generate',
    'extract',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-svg-sprite',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-sprite',
  },
  stats: {
    downloads: {
      monthly: 768,
      weekly: 197,
    },
  },
})
