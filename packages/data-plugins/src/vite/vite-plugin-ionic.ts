import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ionic',
  description: 'Vite plugin that integrates @ionic/core — handles static file serving (dev + build), optimizeDeps, externals, and LightningCSS warning suppression.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ionic',
    'ionic-framework',
    'web-components',
    'stencil',
    'react',
    'vue',
    'angular',
    'svelte',
    'mithril',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DeJy/vite-plugin-ionic',
    npm: 'https://www.npmjs.com/package/vite-plugin-ionic',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 0,
    },
  },
})
