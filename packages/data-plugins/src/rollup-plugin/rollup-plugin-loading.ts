import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-loading',
  description: 'A Rollup plugin that shows a nice spinner when building the bundle',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'progress',
    'loading',
    'spinner',
    'build',
  ],
  source: {
    github: 'doums/rollup-plugin-loading',
    npm: 'rollup-plugin-loading',
  },
  links: {
    github: 'https://github.com/doums/rollup-plugin-loading',
    npm: 'https://www.npmjs.com/package/rollup-plugin-loading',
    website: 'https://github.com/doums/rollup-plugin-loading#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 3,
    },
  },
})
