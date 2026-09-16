import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-esformatter',
  description: 'Rollup plugin to beautify bundle with esformatter',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'esformatter',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-esformatter',
    npm: 'rollup-plugin-esformatter',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-esformatter',
    npm: 'https://www.npmjs.com/package/rollup-plugin-esformatter',
    website: 'https://github.com/mjeanroy/rollup-plugin-esformatter#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 227,
      weekly: 96,
    },
  },
})
