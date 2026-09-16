import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dish/rollup-plugin-flat-dts',
  description: '.d.ts files flattener and Rollup plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
    'dts',
    '@types',
  ],
  source: {
    github: 'run-z/rollup-plugin-flat-dts',
    npm: '@dish/rollup-plugin-flat-dts',
  },
  links: {
    github: 'https://github.com/run-z/rollup-plugin-flat-dts',
    npm: 'https://www.npmjs.com/package/@dish/rollup-plugin-flat-dts',
    website: 'https://github.com/run-z/rollup-plugin-flat-dts',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
