import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unjsio/rollup-plugin-dts',
  description: 'A rollup plugin that will bundle up your .d.ts definition files.',
  version: '5.0.0-rc.1',
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
    npm: 'https://www.npmjs.com/package/@unjsio/rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 399,
      weekly: 32,
    },
  },
})
