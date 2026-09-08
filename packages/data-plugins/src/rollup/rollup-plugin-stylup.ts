import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylup',
  description: 'A Rollup.js plugin to compile Stylus files',
  icon: 'logos:rollupjs',
  version: '1.3.4',
  category: 'plugin',
  tags: [
    'css',
    'css-modules',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'zeekay/rollup-plugin-stylup',
    npm: 'rollup-plugin-stylup',
  },
  links: {
    github: 'https://github.com/zeekay/rollup-plugin-stylup',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylup',
  },
  stats: {
    downloads: {
      monthly: 107,
      weekly: 14,
    },
  },
})
