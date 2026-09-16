import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-consts',
  description: 'Import build time constants with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'const',
    'consts',
    'constant',
  ],
  source: {
    github: 'NotWoods/rollup-plugin-consts',
    npm: 'rollup-plugin-consts',
  },
  links: {
    github: 'https://github.com/NotWoods/rollup-plugin-consts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-consts',
    website: 'https://github.com/NotWoods/rollup-plugin-consts#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 2675,
      weekly: 442,
    },
  },
})
