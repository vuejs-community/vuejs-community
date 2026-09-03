import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@baicie/plugin-dts',
  description: 'A rollup plugin that will bundle up your .d.ts definition files.',
  version: '0.0.3',
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
    github: 'https://github.com/baicie/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@baicie/plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 250,
      weekly: 8,
    },
  },
})
