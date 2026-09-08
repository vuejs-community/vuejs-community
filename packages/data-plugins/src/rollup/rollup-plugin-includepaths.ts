import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-includepaths',
  description: 'Rollup plugin to use relative paths in your project files',
  icon: 'logos:rollupjs',
  version: '0.2.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'es6',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'dot-build/rollup-plugin-includepaths',
    npm: 'rollup-plugin-includepaths',
  },
  links: {
    github: 'https://github.com/dot-build/rollup-plugin-includepaths',
    npm: 'https://www.npmjs.com/package/rollup-plugin-includepaths',
  },
  stats: {
    downloads: {
      monthly: 283807,
      weekly: 38212,
    },
  },
})
