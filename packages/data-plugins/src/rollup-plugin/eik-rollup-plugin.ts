import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eik/rollup-plugin',
  description: 'Rollup plugin for loading import maps from a Eik server and applying the mapping to ECMAScript modules in preparation for upload to the same server.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup.js',
    'rollup',
    'import',
    'url',
    'esm',
  ],
  source: {
    github: 'eik-lib/rollup-plugin',
    npm: '@eik/rollup-plugin',
  },
  links: {
    github: 'https://github.com/eik-lib/rollup-plugin',
    npm: 'https://www.npmjs.com/package/@eik/rollup-plugin',
    website: 'https://github.com/eik-lib/rollup-plugin#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 1353,
      weekly: 136,
    },
  },
})
