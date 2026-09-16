import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-license',
  description: 'Rollup plugin to add license banner to the final bundle and output third party licenses',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-license',
    npm: 'rollup-plugin-license',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-license',
    npm: 'https://www.npmjs.com/package/rollup-plugin-license',
    website: 'https://github.com/mjeanroy/rollup-plugin-license',
  },
  stats: {
    stars: 140,
    downloads: {
      monthly: 1019969,
      weekly: 189873,
    },
  },
})
