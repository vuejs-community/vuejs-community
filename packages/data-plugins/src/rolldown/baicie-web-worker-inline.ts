import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@baicie/web-worker-inline',
  description: 'Web Worker integration for Baicie projects',
  version: '0.2.5',
  category: 'plugin',
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
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/baicie/rollup-plugin-web-worker-loader',
    npm: 'https://www.npmjs.com/package/@baicie/web-worker-inline',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 9,
    },
  },
})
