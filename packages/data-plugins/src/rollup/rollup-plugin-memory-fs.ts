import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-memory-fs',
  description: 'Rollup plugin for storing build artifacts in memory, rather than FS.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'dev-server',
    'memfs',
    'memory-fs',
    'memory',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/mrnateriver/rollup-plugin-memory-fs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-memory-fs',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 11,
    },
  },
})
