import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-peer-deps-external',
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
    github: 'https://github.com/pmowrer/rollup-plugin-peer-deps-external',
    npm: 'https://www.npmjs.com/package/rollup-plugin-peer-deps-external',
    website: 'https://github.com/pmowrer/rollup-plugin-peer-deps-external#readme',
  },
  source: {
    github: 'pmowrer/rollup-plugin-peer-deps-external',
    npm: 'rollup-plugin-peer-deps-external',
  },
  stats: {
    stars: 111,
    downloads: {
      monthly: 1830529,
      weekly: 356450,
    },
  },
})
