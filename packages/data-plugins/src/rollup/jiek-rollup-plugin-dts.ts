import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jiek/rollup-plugin-dts',
  description: 'A rollup plugin that will bundle up your .d.ts definition files.',
  version: '6.3.8',
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
    github: 'https://github.com/NWYLZW/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@jiek/rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 122,
      weekly: 33,
    },
  },
})
