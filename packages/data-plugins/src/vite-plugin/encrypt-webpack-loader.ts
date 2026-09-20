import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'encrypt-webpack-loader',
  description: 'A webpack loader and vite plugin to encrypt your apis to keep safe',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cryptoJs',
    'webpack',
    'webpack-loader',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/encrypt-webpack-loader',
  },
  source: {
    npm: 'encrypt-webpack-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
