import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-globsync',
  description: 'Rollup plugin to copy globs & watch for changes',
  icon: 'logos:rollupjs',
  version: '2.2.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'glob',
    'sync',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-globsync',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-globsync',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 5,
    },
  },
})
