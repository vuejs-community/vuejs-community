import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-less-loader',
  description: 'a rollup plugin for less files',
  icon: 'logos:rollupjs',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'less',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'christlee1989/rollup-plugin-less-loader',
    npm: 'rollup-plugin-less-loader',
  },
  links: {
    github: 'https://github.com/christlee1989/rollup-plugin-less-loader',
    npm: 'https://www.npmjs.com/package/rollup-plugin-less-loader',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
