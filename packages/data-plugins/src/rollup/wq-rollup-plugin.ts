import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wq/rollup-plugin',
  description: 'Build custom wq plugins that integrate with wq.js',
  version: '2.1.0',
  category: 'plugin',
  tags: [
    'wq',
    'build',
    'rollup',
    'rollup-plugin',
    'bundle',
    'virtual',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/wq/wq.create',
    npm: 'https://www.npmjs.com/package/@wq/rollup-plugin',
  },
  stats: {
    downloads: {
      monthly: 114,
      weekly: 44,
    },
  },
})
