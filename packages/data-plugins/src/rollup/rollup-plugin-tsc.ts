import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tsc',
  description: 'A small rollup plugin for transpiling typescript.',
  version: '1.1.16',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'typescript',
    'tsc',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tsne/rollup-plugin-tsc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tsc',
  },
  stats: {
    downloads: {
      monthly: 373,
      weekly: 53,
    },
  },
})
