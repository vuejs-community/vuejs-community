import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-postcss-treeshakeable',
  description: 'Enables treeshaking of modular CSS produced by PostCSS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'postcss',
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
    stars: 6,
    downloads: {
      monthly: 28,
      weekly: 5,
    },
  },
})
