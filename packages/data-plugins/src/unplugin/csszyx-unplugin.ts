import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@csszyx/unplugin',
  description: 'Vite and Webpack integration for csszyx',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'csszyx',
    'vite',
    'webpack',
    'plugin',
    'css-in-js',
    'unplugin',
  ],
  source: {
    github: 'nguyennhutien/csszyx',
    npm: '@csszyx/unplugin',
  },
  links: {
    github: 'https://github.com/nguyennhutien/csszyx',
    npm: 'https://www.npmjs.com/package/@csszyx/unplugin',
    website: 'https://github.com/nguyennhutien/csszyx/tree/main/packages/unplugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2011,
      weekly: 248,
    },
  },
})
