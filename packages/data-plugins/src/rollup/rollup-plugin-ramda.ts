import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ramda',
  description: 'Removes unused ramda dependencies',
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
  links: {
    github: 'https://github.com/idmitriev/rollup-plugin-ramda',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ramda',
  },
  stats: {
    downloads: {
      monthly: 275,
      weekly: 26,
    },
  },
})
