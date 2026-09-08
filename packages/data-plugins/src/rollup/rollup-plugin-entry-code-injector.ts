import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entry-code-injector',
  description: 'A simple rollup plugin that can inject code in the entry files. Can be used for adding polyfills to the bundle in a legacy build.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mmirca/rollup-plugin-entry-code-injector',
    npm: 'rollup-plugin-entry-code-injector',
  },
  links: {
    github: 'https://github.com/mmirca/rollup-plugin-entry-code-injector',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entry-code-injector',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
