import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-jsshaker',
  description: 'The Rollup/Rolldown/Vite plugin for [JsShaker](https://github.com/kermanx/jsshaker), an experimental code size optimizer for JavaScript based on [the Oxc parser](https://oxc.rs).',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'jsshaker',
  ],
  links: {
    github: 'https://github.com/kermanx/jsshaker',
    npm: 'https://www.npmjs.com/package/rollup-plugin-jsshaker',
    website: 'https://github.com/kermanx/jsshaker#readme',
  },
  source: {
    github: 'kermanx/jsshaker',
    npm: 'rollup-plugin-jsshaker',
  },
  stats: {
    stars: 433,
    downloads: {
      monthly: 37,
      weekly: 4,
    },
  },
})
