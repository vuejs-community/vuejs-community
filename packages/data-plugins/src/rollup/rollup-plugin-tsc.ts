import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tsc',
  description: 'A small rollup plugin for transpiling typescript.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'tsne/rollup-plugin-tsc',
    npm: 'rollup-plugin-tsc',
  },
  links: {
    github: 'https://github.com/tsne/rollup-plugin-tsc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tsc',
  },
  stats: {
    downloads: {
      monthly: 270,
      weekly: 19,
    },
  },
})
