import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-externals',
  description: 'Rollup plugin to declare dependencies external with reasonable defaults and customizable logic.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'external',
    'node',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-externals',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-externals/README.md',
  },
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-externals',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 144,
      weekly: 21,
    },
  },
})
