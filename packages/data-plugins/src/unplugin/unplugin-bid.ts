import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-bid',
  description: 'Import .bid files as strings 🧵 in Vite, Rollup, Webpack + more',
  icon: 'icon:dark-unplugin',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'three.js',
    'svelte-cubed',
    'bid',
    'bid-loader',
    'bid-file',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'tonyketcham/unplugin-bid',
    npm: 'unplugin-bid',
  },
  links: {
    github: 'https://github.com/tonyketcham/unplugin-bid',
    npm: 'https://www.npmjs.com/package/unplugin-bid',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 8,
    },
  },
})
