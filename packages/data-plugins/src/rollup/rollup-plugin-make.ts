import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-make',
  description: 'Rollup plugin to build dependency files suitable for make',
  version: '3.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'make',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/btmorex/rollup-plugin-make',
    npm: 'https://www.npmjs.com/package/rollup-plugin-make',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
