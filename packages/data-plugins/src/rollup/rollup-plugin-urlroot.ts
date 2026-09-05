import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-urlroot',
  description: 'RollupJS plugin for absolute import resolving for absolute URL imports on the same host domain',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'url',
    'absolute',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-urlroot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-urlroot',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
