import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-elm',
  description: 'Import .elm files as ES6 modules.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'ulisses-alves/rollup-plugin-elm',
    npm: 'rollup-plugin-elm',
  },
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
