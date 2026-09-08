import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-postcss-treeshakeable',
  description: 'Enables treeshaking of modular CSS produced by PostCSS',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'postcss',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dferber90/rollup-plugin-postcss-treeshakeable',
    npm: 'rollup-plugin-postcss-treeshakeable',
  },
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
