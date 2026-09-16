import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-css-module',
  description: 'Rollup plugin for CSS modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css module',
    'postcss',
  ],
  source: {
    github: 'paul-veevers/rollup-plugin-css-module',
    npm: 'rollup-plugin-css-module',
  },
  links: {
    github: 'https://github.com/paul-veevers/rollup-plugin-css-module',
    npm: 'https://www.npmjs.com/package/rollup-plugin-css-module',
    website: 'https://github.com/paul-veevers/rollup-plugin-css-module#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 106,
      weekly: 12,
    },
  },
})
