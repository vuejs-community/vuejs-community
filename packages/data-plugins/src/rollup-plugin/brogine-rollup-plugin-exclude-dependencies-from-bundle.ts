import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brogine/rollup-plugin-exclude-dependencies-from-bundle',
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
    github: 'brogine/rollup-plugin-exclude-dependencies-from-bundle',
    npm: '@brogine/rollup-plugin-exclude-dependencies-from-bundle',
  },
  links: {
    github: 'https://github.com/brogine/rollup-plugin-exclude-dependencies-from-bundle',
    npm: 'https://www.npmjs.com/package/@brogine/rollup-plugin-exclude-dependencies-from-bundle',
    website: 'https://brogine.github.io/rollup-plugin-exclude-dependencies-from-bundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
