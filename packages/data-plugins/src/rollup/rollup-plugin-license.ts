import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-license',
  description: 'Rollup plugin to add license banner to the final bundle and output third party licenses',
  icon: 'logos:rollupjs',
  version: '3.7.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-license',
    npm: 'rollup-plugin-license',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-license',
    npm: 'https://www.npmjs.com/package/rollup-plugin-license',
  },
  stats: {
    downloads: {
      monthly: 1081227,
      weekly: 294752,
    },
  },
})
