import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esformatter',
  description: 'Rollup plugin to beautify bundle with esformatter',
  icon: 'logos:rollupjs',
  version: '3.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'esformatter',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-esformatter',
    npm: 'rollup-plugin-esformatter',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-esformatter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esformatter',
  },
  stats: {
    downloads: {
      monthly: 161,
      weekly: 57,
    },
  },
})
