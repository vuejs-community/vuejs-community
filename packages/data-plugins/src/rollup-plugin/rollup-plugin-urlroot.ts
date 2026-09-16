import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-urlroot',
  description: 'RollupJS plugin for absolute import resolving for absolute URL imports on the same host domain',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'url',
    'absolute',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-urlroot',
    npm: 'rollup-plugin-urlroot',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-urlroot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-urlroot',
    website: 'https://github.com/shanewholloway/rollup-plugin-urlroot#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
