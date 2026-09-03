import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@martinadamec/rollup-plugin-dts',
  description: 'An experiment to generate .d.ts rollup files',
  version: '1.3.1',
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
    github: 'https://github.com/martinadamec/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@martinadamec/rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
