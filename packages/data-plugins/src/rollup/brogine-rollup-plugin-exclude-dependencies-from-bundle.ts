import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brogine/rollup-plugin-exclude-dependencies-from-bundle',
  description: 'Rollup plugin to automatically add a library\'s peerDependencies and Dependencies to its bundle\'s external config.',
  version: '1.1.24',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'dependencies',
    'exclude',
    'bundle',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/brogine/rollup-plugin-exclude-dependencies-from-bundle',
    npm: 'https://www.npmjs.com/package/@brogine/rollup-plugin-exclude-dependencies-from-bundle',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
