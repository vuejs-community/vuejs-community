import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tiny-codes/vite-plugin-copy-assets',
  description: 'A Vite plugin for copying static assets to the output directory, with support for development-time proxying. Similar to Webpack\'s CopyWebpackPlugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'copy-assets',
    'typescript',
    'front-end',
    'node.js',
  ],
  source: {
    github: 'shijistar/vite-plugin-copy-assets',
    npm: '@tiny-codes/vite-plugin-copy-assets',
  },
  links: {
    github: 'https://github.com/shijistar/vite-plugin-copy-assets',
    npm: 'https://www.npmjs.com/package/@tiny-codes/vite-plugin-copy-assets',
    website: 'https://github.com/shijistar/vite-plugin-copy-assets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 64,
      weekly: 6,
    },
  },
})
