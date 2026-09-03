import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'code-sifter',
  description: 'A conditional compilation plugin for webpack and rollup',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'webpack',
    'rollup-plugin',
    'loader',
    'plugin',
    'conditional',
    'compilation',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ShueyYuen/CodeSifter',
    npm: 'https://www.npmjs.com/package/code-sifter',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 9,
    },
  },
})
