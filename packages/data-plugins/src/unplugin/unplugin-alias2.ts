import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-alias2',
  description: 'A universal bundler plugin for defining aliases when bundling packages.',
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
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-alias',
    npm: 'https://www.npmjs.com/package/unplugin-alias2',
    website: 'https://github.com/wzc520pyfm/unplugin-alias#readme',
  },
  source: {
    github: 'wzc520pyfm/unplugin-alias',
    npm: 'unplugin-alias2',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
