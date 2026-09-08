import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-transform-postcss',
  description: 'Transform any files with PostCSS',
  icon: 'logos:rollupjs',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'postcss',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'aggre/rollup-plugin-transform-postcss',
    npm: 'rollup-plugin-transform-postcss',
  },
  links: {
    github: 'https://github.com/aggre/rollup-plugin-transform-postcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-transform-postcss',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 9,
    },
  },
})
