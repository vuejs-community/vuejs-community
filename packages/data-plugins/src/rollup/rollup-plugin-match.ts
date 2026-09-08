import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-match',
  description: 'A rollup plugin for matching files',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin-match',
    'rollup-plugin',
    'match',
    'globby',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'fengxinming/rollup-plugins',
    npm: 'rollup-plugin-match',
  },
  links: {
    github: 'https://github.com/fengxinming/rollup-plugins',
    npm: 'https://www.npmjs.com/package/rollup-plugin-match',
  },
  stats: {
    downloads: {
      monthly: 185,
      weekly: 41,
    },
  },
})
