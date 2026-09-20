import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-tsc',
  description: 'A small rollup plugin for transpiling typescript.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'typescript',
    'tsc',
  ],
  links: {
    github: 'https://github.com/tsne/rollup-plugin-tsc',
    npm: 'https://www.npmjs.com/package/rollup-plugin-tsc',
    website: 'https://github.com/tsne/rollup-plugin-tsc',
  },
  source: {
    github: 'tsne/rollup-plugin-tsc',
    npm: 'rollup-plugin-tsc',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 390,
      weekly: 182,
    },
  },
})
