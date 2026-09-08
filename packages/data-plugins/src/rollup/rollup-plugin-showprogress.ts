import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-showprogress',
  description: 'Rollup plugin to show a progress bar',
  icon: 'logos:rollupjs',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'progress',
    'progressbar',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'juxtacode/rollup-plugin-showprogress',
    npm: 'rollup-plugin-showprogress',
  },
  links: {
    github: 'https://github.com/juxtacode/rollup-plugin-showprogress',
    npm: 'https://www.npmjs.com/package/rollup-plugin-showprogress',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
