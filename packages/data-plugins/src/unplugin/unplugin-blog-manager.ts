import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-blog-manager',
  description: 'A plugin to help you manage and organize your blog.',
  icon: 'icon:dark-unplugin',
  version: '0.0.3',
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
    github: 'jic999/unplugin-blog-manager',
    npm: 'unplugin-blog-manager',
  },
  links: {
    github: 'https://github.com/jic999/unplugin-blog-manager',
    npm: 'https://www.npmjs.com/package/unplugin-blog-manager',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
