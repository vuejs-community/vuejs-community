import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fileinfo',
  description: 'a rollup plugin to show bundle size',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'filesizes',
  ],
  source: {
    github: 'hoyeungw/rollup-plugin-fileinfo',
    npm: 'rollup-plugin-fileinfo',
  },
  links: {
    github: 'https://github.com/hoyeungw/rollup-plugin-fileinfo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fileinfo',
    website: 'https://github.com/hoyeungw/rollup-plugin-fileinfo#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 292,
      weekly: 31,
    },
  },
})
