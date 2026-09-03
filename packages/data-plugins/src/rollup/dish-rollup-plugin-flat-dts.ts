import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dish/rollup-plugin-flat-dts',
  description: '.d.ts files flattener and Rollup plugin',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'typescript',
    'dts',
    '@types',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/run-z/rollup-plugin-flat-dts',
    npm: 'https://www.npmjs.com/package/@dish/rollup-plugin-flat-dts',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
