import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsy-babel',
  description: 'Babel configuration for using JSY in rollup',
  icon: 'logos:rollupjs',
  version: '2.3.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jsy-lang/rollup-plugin-jsy-babel',
    npm: 'rollup-plugin-jsy-babel',
  },
  links: {
    github: 'https://github.com/jsy-lang/rollup-plugin-jsy-babel',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsy-babel',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
