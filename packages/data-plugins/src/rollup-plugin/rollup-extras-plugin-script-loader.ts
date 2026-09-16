import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-script-loader',
  description: 'Rollup plugin to mimic Webpack\'s script-loader inline behavior. Inlines raw scripts into the bundle in import order, enabling legacy library loading with stable ordering, terser optimization and concatenation.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'script-loader',
    'legacy',
    'inline',
    'concatenation',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-script-loader',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-script-loader',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-script-loader/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 8,
    },
  },
})
