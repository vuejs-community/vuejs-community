import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-exclude-dependencies-from-bundle',
  description: 'Rollup plugin to automatically add a library\'s peerDependencies and Dependencies to its bundle\'s external config.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'dependencies',
    'exclude',
    'bundle',
  ],
  source: {
    github: 'basselalaraaj/rollup-plugin-exclude-dependencies-from-bundle',
    npm: 'rollup-plugin-exclude-dependencies-from-bundle',
  },
  links: {
    github: 'https://github.com/basselalaraaj/rollup-plugin-exclude-dependencies-from-bundle',
    npm: 'https://www.npmjs.com/package/rollup-plugin-exclude-dependencies-from-bundle',
    website: 'https://basselalaraaj.github.io/rollup-plugin-exclude-dependencies-from-bundle',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 14000,
      weekly: 2846,
    },
  },
})
