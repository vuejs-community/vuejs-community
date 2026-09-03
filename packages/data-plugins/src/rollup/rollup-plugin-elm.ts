import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-elm',
  description: 'Import .elm files as ES6 modules.',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'elm',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ulisses-alves/rollup-plugin-elm',
    npm: 'https://www.npmjs.com/package/rollup-plugin-elm',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 9,
    },
  },
})
