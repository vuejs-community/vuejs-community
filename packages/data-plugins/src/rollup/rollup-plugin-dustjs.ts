import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dustjs',
  description: 'A rollup plugin for importing dustjs templates as modules',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'dustjs',
    'dustjs-linkedin',
    'rollup',
    'rollup-plugin',
    'templates',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/chrisdothtml/rollup-plugin-dustjs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dustjs',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
