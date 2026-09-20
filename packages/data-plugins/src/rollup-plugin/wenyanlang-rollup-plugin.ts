import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wenyanlang/rollup-plugin',
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
    npm: 'https://www.npmjs.com/package/@wenyanlang/rollup-plugin',
    website: 'https://github.com/antfu/wenyan-rollup-plugin#readme',
  },
  source: {
    github: 'antfu/wenyan-rollup-plugin',
    npm: '@wenyanlang/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
