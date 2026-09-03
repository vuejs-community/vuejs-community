import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-unbundle',
  description: 'Rollup plugin for excluding dependencies from bundle',
  version: '3.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'bundle',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/run-z/rollup-plugin-unbundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-unbundle',
  },
  stats: {
    downloads: {
      monthly: 82,
      weekly: 24,
    },
  },
})
