import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@joshoy/rollup-plugin-web-worker-loader',
  description: 'Rollup plugin to handle Web Workers (with bug fixes on blob generation)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'webworker',
    'web-worker',
    'worker',
  ],
  source: {
    github: 'JoshOY/rollup-plugin-web-worker-loader',
    npm: '@joshoy/rollup-plugin-web-worker-loader',
  },
  links: {
    github: 'https://github.com/JoshOY/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/@joshoy/rollup-plugin-web-worker-loader',
    website: 'https://github.com/JoshOY/rollup-plugin-web-worker-loader#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 7,
    },
  },
})
