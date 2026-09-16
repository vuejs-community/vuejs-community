import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-transform-postcss',
  description: 'Transform any files with PostCSS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'postcss',
  ],
  source: {
    github: 'aggre/rollup-plugin-transform-postcss',
    npm: 'rollup-plugin-transform-postcss',
  },
  links: {
    github: 'https://github.com/aggre/rollup-plugin-transform-postcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-transform-postcss',
    website: 'https://github.com/aggre/rollup-plugin-transform-postcss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 9,
    },
  },
})
