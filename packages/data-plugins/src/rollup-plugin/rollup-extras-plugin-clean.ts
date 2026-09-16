import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-clean',
  description: 'Rollup plugin to clean a directory during build.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'clean',
    'delete',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-clean',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-clean',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-clean/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 701,
      weekly: 87,
    },
  },
})
