import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-strip-comments',
  description: 'Rollup plugin to strip comments (jsdoc, regular, license, annotation) from output chunks with sourcemap support.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'strip',
    'comments',
    'jsdoc',
    'license',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-strip-comments',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
