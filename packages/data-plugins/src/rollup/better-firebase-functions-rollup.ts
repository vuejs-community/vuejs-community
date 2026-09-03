import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'better-firebase-functions-rollup',
  description: 'Rollup plugin for optimized Firebase Cloud Functions builds. Per-function entry points with tree shaking.',
  version: '7.1.1',
  category: 'plugin',
  tags: [
    'firebase',
    'cloud-functions',
    'rollup',
    'rollup-plugin',
    'optimization',
    'tree-shaking',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/george43g/better-firebase-functions',
    npm: 'https://www.npmjs.com/package/better-firebase-functions-rollup',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
