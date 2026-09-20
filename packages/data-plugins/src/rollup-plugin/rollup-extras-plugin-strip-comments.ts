import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-strip-comments',
  description: 'Rollup plugin to strip comments (jsdoc, regular, license, annotation) from output chunks with sourcemap support.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'strip',
    'comments',
    'jsdoc',
    'license',
    'minify',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-strip-comments',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-strip-comments/README.md',
  },
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-strip-comments',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
