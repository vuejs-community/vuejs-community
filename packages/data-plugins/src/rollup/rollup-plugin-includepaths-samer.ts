import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-includepaths-samer',
  description: 'Rollup plugin to use relative paths in your project files',
  icon: 'logos:rollupjs',
  version: '0.2.2',
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
    npm: 'rollup-plugin-includepaths-samer',
  },
  links: {
    github: 'https://github.com/dot-build/rollup-plugin-includepaths',
    npm: 'https://www.npmjs.com/package/rollup-plugin-includepaths-samer',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
