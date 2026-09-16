import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-commonmark',
  description: 'Convert markdown files to HTML',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'plugin',
    'markdown',
    'commonmark',
    'html',
  ],
  source: {
    npm: 'rollup-plugin-commonmark',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-commonmark',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 2,
    },
  },
})
