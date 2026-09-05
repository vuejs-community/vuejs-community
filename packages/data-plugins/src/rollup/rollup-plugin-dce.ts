import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dce',
  description: 'A rollup plugin that fails when you have dead code anywhere',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Swatinem/rollup-plugin-dce',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dce',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
