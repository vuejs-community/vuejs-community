import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-elm',
  description: 'Import .elm files as ES6 modules.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'elm',
  ],
  source: {
    github: 'ulisses-alves/rollup-plugin-elm',
    npm: 'rollup-plugin-elm',
  },
  links: {
    github: 'https://github.com/ulisses-alves/rollup-plugin-elm',
    npm: 'https://www.npmjs.com/package/rollup-plugin-elm',
    website: 'https://github.com/ulisses-alves/rollup-plugin-elm#readme',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 39,
      weekly: 11,
    },
  },
})
