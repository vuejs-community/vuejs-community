import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-dts',
  description: 'A "rollup-plugin-dts" with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both CommonJS and ES Module formats.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin-dts',
    'rollup-plugin',
    'rollup',
    'plugin',
    'dts',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-dts',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-dts',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 5,
    },
  },
})
