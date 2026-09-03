import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hjson',
  description: 'Converts hjson files to modules',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'hjson',
    'json',
    'template',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/iltimasd/rollup-plugin-string',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hjson',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
