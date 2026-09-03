import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lang/rollup-plugin-dts',
  description: 'An experiment to generate .d.ts rollup files',
  version: '2.0.3',
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
    github: 'https://github.com/Swatinem/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@lang/rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 3626,
      weekly: 943,
    },
  },
})
