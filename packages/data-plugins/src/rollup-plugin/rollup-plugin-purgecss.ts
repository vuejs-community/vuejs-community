import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-purgecss',
  description: 'Rollup plugin for purgecss',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'purgecss',
    'remove',
    'unused',
    'css',
  ],
  links: {
    github: 'https://github.com/FullHuman/purgecss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-purgecss',
    website: 'https://purgecss.com',
  },
  source: {
    github: 'FullHuman/purgecss',
    npm: 'rollup-plugin-purgecss',
  },
  stats: {
    stars: 8048,
    downloads: {
      monthly: 4280,
      weekly: 664,
    },
  },
})
