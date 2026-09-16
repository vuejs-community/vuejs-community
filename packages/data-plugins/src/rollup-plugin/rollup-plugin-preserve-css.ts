import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preserve-css',
  description: 'a rollup plugin to process css. It will preserve the import statement of css and css files in the output bundle when preserveModule is true',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'css',
  ],
  source: {
    npm: 'rollup-plugin-preserve-css',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-preserve-css',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
