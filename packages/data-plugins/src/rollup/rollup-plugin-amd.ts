import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-amd',
  description: 'Convert AMD files to ES2016 modules',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'requirejs',
    'amd',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/piuccio/rollup-plugin-amd',
    npm: 'https://www.npmjs.com/package/rollup-plugin-amd',
  },
  stats: {
    downloads: {
      monthly: 14627,
      weekly: 3998,
    },
  },
})
