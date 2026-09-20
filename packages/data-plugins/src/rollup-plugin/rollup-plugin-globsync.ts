import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-globsync',
  description: 'Rollup plugin to copy globs & watch for changes',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'glob',
    'sync',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-globsync',
  },
  source: {
    npm: 'rollup-plugin-globsync',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 2,
    },
  },
})
