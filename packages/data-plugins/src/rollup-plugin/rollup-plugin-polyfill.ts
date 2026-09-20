import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-polyfill',
  description: 'plugin to prepends bundles with a source file or module',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/JRJurman/rollup-plugin-polyfill',
    npm: 'https://www.npmjs.com/package/rollup-plugin-polyfill',
    website: 'https://github.com/JRJurman/rollup-plugin-polyfill#readme',
  },
  source: {
    github: 'JRJurman/rollup-plugin-polyfill',
    npm: 'rollup-plugin-polyfill',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 8363,
      weekly: 916,
    },
  },
})
