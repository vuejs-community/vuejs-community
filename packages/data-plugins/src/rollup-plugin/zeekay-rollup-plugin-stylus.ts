import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zeekay/rollup-plugin-stylus',
  description: 'A Rollup.js plugin to compile Stylus files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'css',
    'css-modules',
    'rollup-plugin',
  ],
  source: {
    github: 'zeekay/rollup-plugin-stylus',
    npm: '@zeekay/rollup-plugin-stylus',
  },
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-stylus',
    npm: 'https://www.npmjs.com/package/@zeekay/rollup-plugin-stylus',
    website: 'https://github.com/zeekay/rollup-plugin-stylus',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 85,
      weekly: 20,
    },
  },
})
