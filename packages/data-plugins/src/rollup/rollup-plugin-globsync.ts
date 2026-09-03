import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-globsync',
  description: 'Rollup plugin to copy globs & watch for changes',
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
