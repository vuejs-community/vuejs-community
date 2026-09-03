import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-prebundle',
  description: 'Rollup plugin to prebundle external dependencies into a single chunk for faster dev/serve mode.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'prebundle',
    'external',
    'optimize',
    'dev',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-prebundle',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
