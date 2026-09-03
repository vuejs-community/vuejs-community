import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-build',
  description: 'Rollup plugin that builds a service worker with workbox-build',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'service-worker',
    'workbox',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Rainrider/rollup-plugin-workbox-build',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-build',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 11,
    },
  },
})
