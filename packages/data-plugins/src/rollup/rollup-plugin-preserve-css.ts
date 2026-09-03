import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-preserve-css',
  description: 'a rollup plugin to process css. It will preserve the import statement of css and css files in the output bundle when preserveModule is true',
  version: '0.0.1-alpha.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'css',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-preserve-css',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
