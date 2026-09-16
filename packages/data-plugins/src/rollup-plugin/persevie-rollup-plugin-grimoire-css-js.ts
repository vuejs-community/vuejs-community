import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@persevie/rollup-plugin-grimoire-css-js',
  description: 'rollup plugin for @persevie/grimoire-css-js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'grimoire-css',
    'rollup',
    'rollup-plugin',
    'css',
    'css-engine',
    'dynamic-css',
    'frontend',
    'rust',
    'styling',
  ],
  source: {
    github: 'persevie/grimoire-css-js',
    npm: '@persevie/rollup-plugin-grimoire-css-js',
  },
  links: {
    github: 'https://github.com/persevie/grimoire-css-js',
    npm: 'https://www.npmjs.com/package/@persevie/rollup-plugin-grimoire-css-js',
    website: 'https://github.com/persevie/grimoire-css-js#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
