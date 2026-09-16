import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsy-lite',
  description: 'Rollup JSY syntax transpiler to standard JavaScript — without Babel',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'JSY',
  ],
  source: {
    github: 'jsy-lang/rollup-plugin-jsy-lite',
    npm: 'rollup-plugin-jsy-lite',
  },
  links: {
    github: 'https://github.com/jsy-lang/rollup-plugin-jsy-lite',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsy-lite',
    website: 'https://github.com/jsy-lang/rollup-plugin-jsy-lite#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 66,
      weekly: 5,
    },
  },
})
