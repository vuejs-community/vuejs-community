import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-commonmark',
  description: 'Convert markdown files to HTML',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'plugin',
    'markdown',
    'commonmark',
    'html',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-commonmark',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-commonmark',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
