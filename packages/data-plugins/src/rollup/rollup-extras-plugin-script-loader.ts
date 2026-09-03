import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-script-loader',
  description: 'Rollup plugin to mimic Webpack\'s script-loader inline behavior. Inlines raw scripts into the bundle in import order, enabling legacy library loading with stable ordering, terser optimization and concatenation.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'script-loader',
    'legacy',
    'inline',
    'concatenation',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-script-loader',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 4,
    },
  },
})
