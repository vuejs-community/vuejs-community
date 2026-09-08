import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-consts',
  description: 'Import build time constants with Rollup',
  icon: 'logos:rollupjs',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'const',
    'consts',
    'constant',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'NotWoods/rollup-plugin-consts',
    npm: 'rollup-plugin-consts',
  },
  links: {
    github: 'https://github.com/NotWoods/rollup-plugin-consts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-consts',
  },
  stats: {
    downloads: {
      monthly: 2360,
      weekly: 917,
    },
  },
})
