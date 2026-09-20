import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-copy',
  description: 'Rollup plugin to copy assets during build.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'copy',
    'assets',
  ],
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-copy',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-copy/README.md',
  },
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-copy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 4460,
      weekly: 933,
    },
  },
})
