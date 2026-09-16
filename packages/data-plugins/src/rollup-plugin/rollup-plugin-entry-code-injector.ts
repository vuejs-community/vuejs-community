import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-entry-code-injector',
  description: 'A simple rollup plugin that can inject code in the entry files. Can be used for adding polyfills to the bundle in a legacy build.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'mmirca/rollup-plugin-entry-code-injector',
    npm: 'rollup-plugin-entry-code-injector',
  },
  links: {
    github: 'https://github.com/mmirca/rollup-plugin-entry-code-injector',
    npm: 'https://www.npmjs.com/package/rollup-plugin-entry-code-injector',
    website: 'https://github.com/mmirca/rollup-plugin-entry-code-injector#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
