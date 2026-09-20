import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-js',
  description: 'Rollup with inline-js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'inline-js',
    'inliner',
    'static',
    'assets',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-inline-js',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-js',
    website: 'https://github.com/eight04/rollup-plugin-inline-js#readme',
  },
  source: {
    github: 'eight04/rollup-plugin-inline-js',
    npm: 'rollup-plugin-inline-js',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 163,
      weekly: 44,
    },
  },
})
