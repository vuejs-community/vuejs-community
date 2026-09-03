import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@joshoy/rollup-plugin-web-worker-loader',
  description: 'Rollup plugin to handle Web Workers (with bug fixes on blob generation)',
  version: '1.6.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'webworker',
    'web-worker',
    'worker',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/JoshOY/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/@joshoy/rollup-plugin-web-worker-loader',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 8,
    },
  },
})
