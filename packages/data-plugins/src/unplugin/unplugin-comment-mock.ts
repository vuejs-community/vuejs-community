import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-comment-mock',
  description: 'mock data through comment',
  icon: 'icon:dark-unplugin',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'mock',
    'comment',
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
    github: 'dixdiydiz/unplugin-comment-mock',
    npm: 'unplugin-comment-mock',
  },
  links: {
    github: 'https://github.com/dixdiydiz/unplugin-comment-mock',
    npm: 'https://www.npmjs.com/package/unplugin-comment-mock',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
