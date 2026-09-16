import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-web-components',
  description: 'Building vue3 components to webComponents on vite',
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
    'webComponents',
  ],
  source: {
    github: 'WX-DongXing/unplugin-web-components',
    npm: 'unplugin-web-components',
  },
  links: {
    github: 'https://github.com/WX-DongXing/unplugin-web-components',
    npm: 'https://www.npmjs.com/package/unplugin-web-components',
    website: 'https://github.com/WX-DongXing/unplugin-web-components#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
