import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-watch-globs',
  description: 'A Rollup plugin that allows you to watch arbitrary files for changes (like static assets and stylesheets)',
  icon: 'logos:rollupjs',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'watch',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'caleb531/rollup-plugin-watch-globs',
    npm: 'rollup-plugin-watch-globs',
  },
  links: {
    github: 'https://github.com/caleb531/rollup-plugin-watch-globs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-watch-globs',
  },
  stats: {
    downloads: {
      monthly: 284,
      weekly: 74,
    },
  },
})
