import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-export-equals',
  description: 'Transforms export default x or export { x as default } to export = x for CommonJS module type declaration export',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'export',
    'exports',
    'equals',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/manferlo81/rollup-plugin-export-equals',
    npm: 'https://www.npmjs.com/package/rollup-plugin-export-equals',
  },
  stats: {
    downloads: {
      monthly: 585,
      weekly: 82,
    },
  },
})
