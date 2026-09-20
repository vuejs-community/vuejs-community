import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ramda',
  description: 'Removes unused ramda dependencies',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'modules',
    'ramda',
  ],
  links: {
    github: 'https://github.com/idmitriev/rollup-plugin-ramda',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ramda',
    website: 'https://github.com/idmitriev/rollup-plugin-ramda#readme',
  },
  source: {
    github: 'idmitriev/rollup-plugin-ramda',
    npm: 'rollup-plugin-ramda',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 125,
      weekly: 28,
    },
  },
})
