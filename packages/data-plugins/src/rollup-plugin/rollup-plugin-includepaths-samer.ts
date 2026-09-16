import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-includepaths-samer',
  description: 'Rollup plugin to use relative paths in your project files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rollup',
    'es6',
  ],
  source: {
    github: 'dot-build/rollup-plugin-includepaths',
    npm: 'rollup-plugin-includepaths-samer',
  },
  links: {
    github: 'https://github.com/dot-build/rollup-plugin-includepaths',
    npm: 'https://www.npmjs.com/package/rollup-plugin-includepaths-samer',
    website: 'https://github.com/dot-build/rollup-plugin-includepaths#readme',
  },
  stats: {
    stars: 96,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
