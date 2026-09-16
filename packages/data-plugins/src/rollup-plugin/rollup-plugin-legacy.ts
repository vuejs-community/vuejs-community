import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-legacy',
  description: 'Add export statements to plain scripts',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-legacy',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-legacy',
    website: 'https://github.com/rollup/plugins/tree/master/packages/legacy/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12350,
      weekly: 2448,
    },
  },
})
