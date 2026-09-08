import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ramda',
  description: 'Removes unused ramda dependencies',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'modules',
    'ramda',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'idmitriev/rollup-plugin-ramda',
    npm: 'rollup-plugin-ramda',
  },
  links: {
    github: 'https://github.com/idmitriev/rollup-plugin-ramda',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ramda',
  },
  stats: {
    downloads: {
      monthly: 165,
      weekly: 41,
    },
  },
})
