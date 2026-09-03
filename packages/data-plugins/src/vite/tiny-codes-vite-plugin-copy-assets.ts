import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tiny-codes/vite-plugin-copy-assets',
  description: 'A Vite plugin for copying static assets to the output directory, with support for development-time proxying. Similar to Webpack\'s CopyWebpackPlugin.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'copy-assets',
    'typescript',
    'front-end',
    'node.js',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/shijistar/vite-plugin-copy-assets',
    npm: 'https://www.npmjs.com/package/@tiny-codes/vite-plugin-copy-assets',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 17,
    },
  },
})
