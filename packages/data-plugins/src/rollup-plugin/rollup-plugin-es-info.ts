import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-es-info',
  description: 'Dump import/export information of each module',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'es',
    'import',
    'export',
    'information',
    'dump',
  ],
  source: {
    github: 'eight04/rollup-plugin-es-info',
    npm: 'rollup-plugin-es-info',
  },
  links: {
    github: 'https://github.com/eight04/rollup-plugin-es-info',
    npm: 'https://www.npmjs.com/package/rollup-plugin-es-info',
    website: 'https://github.com/eight04/rollup-plugin-es-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
