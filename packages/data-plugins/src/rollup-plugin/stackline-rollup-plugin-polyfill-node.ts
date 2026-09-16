import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stackline/rollup-plugin-polyfill-node',
  description: 'Compatibility-first Rollup polyfills for supported Node.js built-ins in browsers',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'browser',
    'node',
    'polyfill',
    'stackline',
  ],
  source: {
    github: 'alexandroit/stackline-rollup-plugin-polyfill-node',
    npm: '@stackline/rollup-plugin-polyfill-node',
  },
  links: {
    github: 'https://github.com/alexandroit/stackline-rollup-plugin-polyfill-node',
    npm: 'https://www.npmjs.com/package/@stackline/rollup-plugin-polyfill-node',
    website: 'https://alexandro.net/docs/vanilla/rollup-plugin-polyfill-node/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 10,
    },
  },
})
