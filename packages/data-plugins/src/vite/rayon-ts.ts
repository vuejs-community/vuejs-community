import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rayon-ts',
  description: 'Rayon-like data parallelism for Node.js: a Vite plugin that compiles "use parallel" functions to worker_threads kernels with SharedArrayBuffer + Atomics',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rayon',
    'parallel',
    'worker-threads',
    'vite-plugin',
    'sharedarraybuffer',
    'atomics',
    'data-parallelism',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/inaridiy/rayon-ts',
    npm: 'https://www.npmjs.com/package/rayon-ts',
  },
  stats: {
    downloads: {
      monthly: 62,
      weekly: 5,
    },
  },
})
