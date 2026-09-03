import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-skip',
  description: 'Skip all content that has been compiled once',
  version: '0.0.11',
  category: 'plugin',
  tags: [
    'node',
    'vite',
    'rollup',
    'webpack',
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/markthree/unplugin-skip',
    npm: 'https://www.npmjs.com/package/unplugin-skip',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 1,
    },
  },
})
