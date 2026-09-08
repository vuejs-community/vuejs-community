import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-riot',
  description: 'Rollup plugin for Riot.js',
  icon: 'logos:rollupjs',
  version: '10.0.0',
  category: 'plugin',
  tags: [
    'riot',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'riot/rollup-plugin-riot',
    npm: 'rollup-plugin-riot',
  },
  links: {
    github: 'https://github.com/riot/rollup-plugin-riot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-riot',
  },
  stats: {
    downloads: {
      monthly: 3057,
      weekly: 699,
    },
  },
})
