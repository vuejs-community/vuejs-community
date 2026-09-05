import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsshaker',
  description: 'The Rollup/Rolldown/Vite plugin for [JsShaker](https://github.com/kermanx/jsshaker), an experimental code size optimizer for JavaScript based on [the Oxc parser](https://oxc.rs).',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'jsshaker',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kermanx/jsshaker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsshaker',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 3,
    },
  },
})
