import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsy-lite',
  description: 'Rollup JSY syntax transpiler to standard JavaScript — without Babel',
  icon: 'logos:rollupjs',
  version: '1.7.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'JSY',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jsy-lang/rollup-plugin-jsy-lite',
    npm: 'rollup-plugin-jsy-lite',
  },
  links: {
    github: 'https://github.com/jsy-lang/rollup-plugin-jsy-lite',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsy-lite',
  },
  stats: {
    downloads: {
      monthly: 97,
      weekly: 7,
    },
  },
})
