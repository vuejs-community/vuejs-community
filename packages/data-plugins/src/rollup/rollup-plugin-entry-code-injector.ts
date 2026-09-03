import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entry-code-injector',
  description: 'A simple rollup plugin that can inject code in the entry files. Can be used for adding polyfills to the bundle in a legacy build.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
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
