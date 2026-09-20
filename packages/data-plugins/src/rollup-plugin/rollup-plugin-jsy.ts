import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsy',
  description: 'Rollup JSY syntax transpiler to standard JavaScript',
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
  links: {
    github: 'https://github.com/jsy-lang/rollup-plugin-jsy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsy',
    website: 'https://github.com/jsy-lang/rollup-plugin-jsy#readme',
  },
  source: {
    github: 'jsy-lang/rollup-plugin-jsy',
    npm: 'rollup-plugin-jsy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 8,
    },
  },
})
