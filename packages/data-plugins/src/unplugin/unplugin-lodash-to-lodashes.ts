import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-lodash-to-lodashes',
  description: 'Replace lodash with lodash-es for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'lodash',
    'lodash-es',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'Zephyrrro/unplugin-lodash-to-lodashes',
    npm: 'unplugin-lodash-to-lodashes',
  },
  links: {
    github: 'https://github.com/Zephyrrro/unplugin-lodash-to-lodashes',
    npm: 'https://www.npmjs.com/package/unplugin-lodash-to-lodashes',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
