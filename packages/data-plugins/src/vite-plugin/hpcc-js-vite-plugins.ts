import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hpcc-js/vite-plugins',
  description: 'Various vite plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'dojo',
    'amd',
  ],
  links: {
    github: 'https://github.com/hpcc-systems/hpcc-js-wasm',
    npm: 'https://www.npmjs.com/package/@hpcc-js/vite-plugins',
    website: 'https://hpcc-systems.github.io/hpcc-js-wasm/',
  },
  source: {
    github: 'hpcc-systems/hpcc-js-wasm',
    npm: '@hpcc-js/vite-plugins',
  },
  stats: {
    stars: 391,
    downloads: {
      monthly: 1286,
      weekly: 387,
    },
  },
})
