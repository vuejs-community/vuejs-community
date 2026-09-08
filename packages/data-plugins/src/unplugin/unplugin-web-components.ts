import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-web-components',
  description: 'Building vue3 components to webComponents on vite',
  icon: 'icon:dark-unplugin',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'webComponents',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'WX-DongXing/unplugin-web-components',
    npm: 'unplugin-web-components',
  },
  links: {
    github: 'https://github.com/WX-DongXing/unplugin-web-components',
    npm: 'https://www.npmjs.com/package/unplugin-web-components',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
