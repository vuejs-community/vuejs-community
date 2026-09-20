import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylup',
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
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-stylup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylup',
    website: 'https://github.com/zeekay/rollup-plugin-stylup',
  },
  source: {
    github: 'zeekay/rollup-plugin-stylup',
    npm: 'rollup-plugin-stylup',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 96,
      weekly: 15,
    },
  },
})
