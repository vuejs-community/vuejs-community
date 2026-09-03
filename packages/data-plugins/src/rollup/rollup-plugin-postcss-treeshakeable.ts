import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-postcss-treeshakeable',
  description: 'Enables treeshaking of modular CSS produced by PostCSS',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'postcss',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dferber90/rollup-plugin-postcss-treeshakeable',
    npm: 'https://www.npmjs.com/package/rollup-plugin-postcss-treeshakeable',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 7,
    },
  },
})
