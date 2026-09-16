import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baicie/web-worker-inline',
  description: 'Web Worker integration for Baicie projects',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
    'rollup',
    'rollup-plugin',
    'webworker',
    'web-worker',
    'worker',
    'audio-worklet',
    'paint-worklet',
    'service-worker',
    'shared-worker',
  ],
  source: {
    github: 'baicie/rollup-plugin-web-worker-loader',
    npm: '@baicie/web-worker-inline',
  },
  links: {
    github: 'https://github.com/baicie/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/@baicie/web-worker-inline',
    website: 'https://github.com/baicie/rollup-plugin-web-worker-loader#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 47,
      weekly: 4,
    },
  },
})
