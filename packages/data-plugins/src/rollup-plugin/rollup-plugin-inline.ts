import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline',
  description: 'plugin for processing and including static assets via imports using rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'static',
    'asset bundler',
    'asset processer',
    'asset',
  ],
  links: {
    github: 'https://github.com/tylerbeck/rollup-plugin-inline',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline',
    website: 'https://github.com/tylerbeck/rollup-plugin-inline#readme',
  },
  source: {
    github: 'tylerbeck/rollup-plugin-inline',
    npm: 'rollup-plugin-inline',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 21,
      weekly: 6,
    },
  },
})
