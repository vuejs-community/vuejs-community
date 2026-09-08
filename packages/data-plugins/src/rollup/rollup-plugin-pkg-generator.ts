import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pkg-generator',
  description: 'Simple rollup plugin generate a package.json',
  icon: 'logos:rollupjs',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'package.json',
    'plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'savantly-net/rollup-plugin-pkg-generator',
    npm: 'rollup-plugin-pkg-generator',
  },
  links: {
    github: 'https://github.com/savantly-net/rollup-plugin-pkg-generator',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pkg-generator',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
