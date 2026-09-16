import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-web-worker-loader-pkg',
  description: 'Rollup plugin to handle Web Workers',
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
    github: 'darionco/rollup-plugin-web-worker-loader',
    npm: 'rollup-plugin-web-worker-loader-pkg',
  },
  links: {
    github: 'https://github.com/darionco/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/rollup-plugin-web-worker-loader-pkg',
    website: 'https://github.com/darionco/rollup-plugin-web-worker-loader#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
