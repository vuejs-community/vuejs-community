import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-alias2',
  description: 'A universal bundler plugin for defining aliases when bundling packages.',
  icon: 'icon:dark-unplugin',
  version: '0.2.1',
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
  source: {
    github: 'wzc520pyfm/unplugin-alias',
    npm: 'unplugin-alias2',
  },
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-alias',
    npm: 'https://www.npmjs.com/package/unplugin-alias2',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
