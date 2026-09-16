import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-riot',
  description: 'Rollup plugin for Riot.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'riot',
    'rollup-plugin',
  ],
  source: {
    github: 'riot/rollup-plugin-riot',
    npm: 'rollup-plugin-riot',
  },
  links: {
    github: 'https://github.com/riot/rollup-plugin-riot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-riot',
    website: 'https://github.com/riot/rollup-plugin-riot#readme',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 2294,
      weekly: 514,
    },
  },
})
