import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'js-spawn',
  description: 'Run a function in a Web Worker with spawn(fn) and get a Promise back.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'mehranTaslimi/js-spawn',
    npm: 'js-spawn',
  },
  links: {
    github: 'https://github.com/mehranTaslimi/js-spawn',
    npm: 'https://www.npmjs.com/package/js-spawn',
    website: 'https://github.com/mehranTaslimi/js-spawn#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 232,
      weekly: 10,
    },
  },
})
