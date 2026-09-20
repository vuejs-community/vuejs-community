import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@haensl/rollup-plugin-local-resolve',
  description: 'Rollup plugin to resolve relative imports from local folders without stating the index file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'resolve',
    'local',
    'index.js',
    'index.jsx',
    'js',
    'jsx',
  ],
  links: {
    github: 'https://github.com/haensl/rollup-plugin-local-resolve',
    npm: 'https://www.npmjs.com/package/@haensl/rollup-plugin-local-resolve',
    website: 'https://github.com/haensl/rollup-plugin-local-resolve#readme',
  },
  source: {
    github: 'haensl/rollup-plugin-local-resolve',
    npm: '@haensl/rollup-plugin-local-resolve',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 162,
      weekly: 56,
    },
  },
})
