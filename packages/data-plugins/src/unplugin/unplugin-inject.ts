import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject',
  description: 'A universal bundler plugin which scans modules for global variables and injects `import` statements where necessary.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-inject',
    npm: 'https://www.npmjs.com/package/unplugin-inject',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 7,
    },
  },
})
