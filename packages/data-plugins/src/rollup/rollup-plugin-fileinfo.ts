import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fileinfo',
  description: 'a rollup plugin to show bundle size',
  version: '0.3.8',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'filesizes',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/hoyeungw/rollup-plugin-fileinfo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fileinfo',
  },
  stats: {
    downloads: {
      monthly: 406,
      weekly: 45,
    },
  },
})
