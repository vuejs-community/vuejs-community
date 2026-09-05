import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es-info',
  description: 'Dump import/export information of each module',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es',
    'import',
    'export',
    'information',
    'dump',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/eight04/rollup-plugin-es-info',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es-info',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 13,
    },
  },
})
