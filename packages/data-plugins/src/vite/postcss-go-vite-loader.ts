import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@postcss-go/vite-loader',
  description: 'Vite plugin for the postcss-go engine.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'css',
    'postcss',
    'postcss-go',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/postcss-go/postcss-go',
    npm: 'https://www.npmjs.com/package/@postcss-go/vite-loader',
  },
  stats: {
    downloads: {
      monthly: 256,
      weekly: 256,
    },
  },
})
