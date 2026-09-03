import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'js-spawn',
  description: 'Run a function in a Web Worker with spawn(fn) and get a Promise back.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'worker',
    'web-worker',
    'web-workers',
    'offload',
    'concurrency',
    'unplugin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mehranTaslimi/js-spawn',
    npm: 'https://www.npmjs.com/package/js-spawn',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
