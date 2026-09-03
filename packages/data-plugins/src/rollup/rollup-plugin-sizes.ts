import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sizes',
  description: 'Show info about files/packages included with your rollup bundle',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'filesizes',
    'bundler',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tivac/rollup-plugin-sizes',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sizes',
  },
  stats: {
    downloads: {
      monthly: 46574,
      weekly: 12585,
    },
  },
})
