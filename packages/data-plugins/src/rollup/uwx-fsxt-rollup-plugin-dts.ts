import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@uwx/fsxt-rollup-plugin-dts',
  description: 'A rollup plugin that will bundle up your .d.ts definition files.',
  version: '6.0.2',
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
    npm: 'https://www.npmjs.com/package/@uwx/fsxt-rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 18,
    },
  },
})
