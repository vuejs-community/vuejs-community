import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-node-direct',
  description: 'Bundle third-party dependencies in given directories',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'npm',
    'modules',
  ],
  links: {
    github: 'https://github.com/brianmhunt/rollup-plugin-node-direct',
    npm: 'https://www.npmjs.com/package/rollup-plugin-node-direct',
    website: 'https://github.com/brianmhunt/rollup-plugin-node-direct#readme',
  },
  source: {
    github: 'brianmhunt/rollup-plugin-node-direct',
    npm: 'rollup-plugin-node-direct',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
