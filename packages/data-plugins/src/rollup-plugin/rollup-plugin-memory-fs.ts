import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-memory-fs',
  description: 'Rollup plugin for storing build artifacts in memory, rather than FS.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'dev-server',
    'memfs',
    'memory-fs',
    'memory',
  ],
  links: {
    github: 'https://github.com/mrnateriver/rollup-plugin-memory-fs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-memory-fs',
    website: 'https://github.com/mrnateriver/rollup-plugin-memory-fs',
  },
  source: {
    github: 'mrnateriver/rollup-plugin-memory-fs',
    npm: 'rollup-plugin-memory-fs',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
