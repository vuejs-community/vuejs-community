import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-corejs',
  description: '⚡ include core-js polyfills when bundling with rollup',
  icon: 'logos:rollupjs',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'corejs',
    'core-js',
    'polyfill',
    'polyfills',
    'rollup',
    'rollupplugin',
    'rollup-plugin',
    'browserslist',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'susnux/rollup-plugin-corejs',
    npm: 'rollup-plugin-corejs',
  },
  links: {
    github: 'https://github.com/susnux/rollup-plugin-corejs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-corejs',
  },
  stats: {
    downloads: {
      monthly: 48298,
      weekly: 14254,
    },
  },
})
