import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-peer-deps-external',
  description: 'Rollup plugin to automatically add a library\'s peerDependencies to its bundle\'s external config.',
  version: '2.2.4',
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
    github: 'https://github.com/pmowrer/rollup-plugin-peer-deps-external',
    npm: 'https://www.npmjs.com/package/rollup-plugin-peer-deps-external',
  },
  stats: {
    downloads: {
      monthly: 1976300,
      weekly: 517726,
    },
  },
})
