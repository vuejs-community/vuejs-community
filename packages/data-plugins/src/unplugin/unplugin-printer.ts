import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-printer',
  description: 'Print info on the terminal',
  icon: 'icon:dark-unplugin',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'printer',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'webfansplz/unplugin-printer',
    npm: 'unplugin-printer',
  },
  links: {
    github: 'https://github.com/webfansplz/unplugin-printer',
    npm: 'https://www.npmjs.com/package/unplugin-printer',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 3,
    },
  },
})
