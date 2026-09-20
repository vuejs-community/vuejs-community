import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vertigis/rollup-plugin-license',
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
  links: {
    github: 'https://github.com/vertigis/rollup-plugin-license',
    npm: 'https://www.npmjs.com/package/@vertigis/rollup-plugin-license',
    website: 'https://github.com/vertigis/rollup-plugin-license',
  },
  source: {
    github: 'vertigis/rollup-plugin-license',
    npm: '@vertigis/rollup-plugin-license',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 183,
      weekly: 23,
    },
  },
})
