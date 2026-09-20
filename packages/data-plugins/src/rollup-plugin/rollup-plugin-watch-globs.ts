import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-watch-globs',
  description: 'A Rollup plugin that allows you to watch arbitrary files for changes (like static assets and stylesheets)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'watch',
  ],
  links: {
    github: 'https://github.com/caleb531/rollup-plugin-watch-globs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-watch-globs',
    website: 'https://github.com/caleb531/rollup-plugin-watch-globs#readme',
  },
  source: {
    github: 'caleb531/rollup-plugin-watch-globs',
    npm: 'rollup-plugin-watch-globs',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 317,
      weekly: 107,
    },
  },
})
