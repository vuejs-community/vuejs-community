import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-memory-fs',
  description: 'Rollup plugin for storing build artifacts in memory, rather than FS.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'mrnateriver/rollup-plugin-memory-fs',
    npm: 'rollup-plugin-memory-fs',
  },
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
