import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-web-worker-loader-sw',
  description: 'Rollup plugin to handle Web Workers',
  icon: 'logos:rollupjs',
  version: '1.6.0',
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
    github: 'darionco/rollup-plugin-web-worker-loader',
    npm: 'rollup-plugin-web-worker-loader-sw',
  },
  links: {
    github: 'https://github.com/darionco/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/rollup-plugin-web-worker-loader-sw',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
