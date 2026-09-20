import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'code-sifter',
  description: 'A conditional compilation plugin for webpack and rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'webpack',
    'rollup-plugin',
    'loader',
    'plugin',
    'conditional',
    'compilation',
  ],
  links: {
    github: 'https://github.com/ShueyYuen/CodeSifter',
    npm: 'https://www.npmjs.com/package/code-sifter',
    website: 'https://github.com/ShueyYuen/CodeSifter#readme',
  },
  source: {
    github: 'ShueyYuen/CodeSifter',
    npm: 'code-sifter',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
