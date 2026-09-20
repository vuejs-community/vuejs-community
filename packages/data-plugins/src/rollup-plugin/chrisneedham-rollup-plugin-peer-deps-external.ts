import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chrisneedham/rollup-plugin-peer-deps-external',
  description: 'Rollup plugin to automatically add a library\'s peerDependencies to its bundle\'s external config.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'peerDependencies',
    'external',
    'optimize',
    'exclude',
  ],
  links: {
    github: 'https://github.com/chrisn/rollup-plugin-peer-deps-external',
    npm: 'https://www.npmjs.com/package/@chrisneedham/rollup-plugin-peer-deps-external',
  },
  source: {
    github: 'chrisn/rollup-plugin-peer-deps-external',
    npm: '@chrisneedham/rollup-plugin-peer-deps-external',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 1623,
      weekly: 175,
    },
  },
})
