import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject',
  description: 'A universal bundler plugin which scans modules for global variables and injects `import` statements where necessary.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'wzc520pyfm/unplugin-inject',
    npm: 'unplugin-inject',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-inject',
    npm: 'https://www.npmjs.com/package/unplugin-inject',
    website: 'https://github.com/wzc520pyfm/unplugin-inject#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 40,
      weekly: 29,
    },
  },
})
