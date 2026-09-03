import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'encrypt-webpack-loader',
  description: 'A webpack loader and vite plugin to encrypt your apis to keep safe',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'cryptoJs',
    'webpack',
    'webpack-loader',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/encrypt-webpack-loader',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
