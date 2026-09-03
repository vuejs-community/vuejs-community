import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chrisneedham/rollup-plugin-peer-deps-external',
  description: 'Rollup plugin to automatically add a library\'s peerDependencies to its bundle\'s external config.',
  version: '2.3.1',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'peerDependencies',
    'external',
    'optimize',
    'exclude',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/chrisn/rollup-plugin-peer-deps-external',
    npm: 'https://www.npmjs.com/package/@chrisneedham/rollup-plugin-peer-deps-external',
  },
  stats: {
    downloads: {
      monthly: 1272,
      weekly: 365,
    },
  },
})
