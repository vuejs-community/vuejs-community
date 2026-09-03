import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mnrendra/rollup-plugin-esbuild',
  description: 'A "rollup-plugin-esbuild" with dual exports, allowing consumers to `import` or `require` it without needing to access the `.default` export in both CommonJS and ES Module formats.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin-esbuild',
    'rollup-plugin',
    'rollup',
    'plugin',
    'esbuild',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mnrendra/rollup-plugin-esbuild',
    npm: 'https://www.npmjs.com/package/@mnrendra/rollup-plugin-esbuild',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 9,
    },
  },
})
