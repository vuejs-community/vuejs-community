import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rayon-ts',
  description: 'Rayon-like data parallelism for Node.js: a Vite plugin that compiles "use parallel" functions to worker_threads kernels with SharedArrayBuffer + Atomics',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rayon',
    'parallel',
    'worker-threads',
    'vite-plugin',
    'sharedarraybuffer',
    'atomics',
    'data-parallelism',
  ],
  links: {
    github: 'https://github.com/inaridiy/rayon-ts',
    npm: 'https://www.npmjs.com/package/rayon-ts',
    website: 'https://github.com/inaridiy/rayon-ts#readme',
  },
  source: {
    github: 'inaridiy/rayon-ts',
    npm: 'rayon-ts',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 25,
      weekly: 3,
    },
  },
})
