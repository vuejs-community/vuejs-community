import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@postcss-go/vite-loader',
  description: 'Vite plugin for the postcss-go engine.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'postcss',
    'postcss-go',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/postcss-go/postcss-go',
    npm: 'https://www.npmjs.com/package/@postcss-go/vite-loader',
    website: 'https://postcss-go.github.io/',
  },
  source: {
    github: 'postcss-go/postcss-go',
    npm: '@postcss-go/vite-loader',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 437,
      weekly: 22,
    },
  },
})
