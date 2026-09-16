import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'better-firebase-functions-rollup',
  description: 'Rollup plugin for optimized Firebase Cloud Functions builds. Per-function entry points with tree shaking.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'firebase',
    'cloud-functions',
    'rollup',
    'rollup-plugin',
    'optimization',
    'tree-shaking',
  ],
  source: {
    github: 'george43g/better-firebase-functions',
    npm: 'better-firebase-functions-rollup',
  },
  links: {
    github: 'https://github.com/george43g/better-firebase-functions',
    npm: 'https://www.npmjs.com/package/better-firebase-functions-rollup',
    website: 'https://github.com/george43g/better-firebase-functions#readme',
  },
  stats: {
    stars: 183,
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
