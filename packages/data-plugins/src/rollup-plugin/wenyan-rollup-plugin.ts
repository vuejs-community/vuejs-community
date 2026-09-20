import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wenyan/rollup-plugin',
  description: 'Rollup plugin for wenyan-lang',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'wenyan',
    'wenyan-lang',
  ],
  links: {
    github: 'https://github.com/antfu/wenyan-rollup-plugin',
    npm: 'https://www.npmjs.com/package/@wenyan/rollup-plugin',
    website: 'https://github.com/antfu/wenyan-rollup-plugin#readme',
  },
  source: {
    github: 'antfu/wenyan-rollup-plugin',
    npm: '@wenyan/rollup-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
