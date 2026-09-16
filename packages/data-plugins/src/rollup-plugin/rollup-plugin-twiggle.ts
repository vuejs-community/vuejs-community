import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-twiggle',
  description: 'Rollup plugin for Twiggle JSX transformation',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'twiggle',
    'jsx',
  ],
  source: {
    npm: 'rollup-plugin-twiggle',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-twiggle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
