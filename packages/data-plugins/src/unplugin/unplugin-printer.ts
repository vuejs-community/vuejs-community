import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-printer',
  description: 'Print info on the terminal',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'printer',
  ],
  source: {
    github: 'webfansplz/unplugin-printer',
    npm: 'unplugin-printer',
  },
  links: {
    github: 'https://github.com/webfansplz/unplugin-printer',
    npm: 'https://www.npmjs.com/package/unplugin-printer',
    website: 'https://github.com/webfansplz/unplugin-printer#readme',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
