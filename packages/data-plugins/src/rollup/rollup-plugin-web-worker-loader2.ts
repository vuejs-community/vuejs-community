import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-web-worker-loader2',
  description: 'Rollup plugin to handle Web Workers',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'htoooth/rollup-plugin-web-worker-loader',
    npm: 'rollup-plugin-web-worker-loader2',
  },
  links: {
    github: 'https://github.com/htoooth/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/rollup-plugin-web-worker-loader2',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
