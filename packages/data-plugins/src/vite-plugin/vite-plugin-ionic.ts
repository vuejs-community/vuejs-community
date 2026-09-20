import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ionic',
  description: 'Vite plugin that integrates @ionic/core — handles static file serving (dev + build), optimizeDeps, externals, and LightningCSS warning suppression.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/DeJy/vite-plugin-ionic',
    npm: 'https://www.npmjs.com/package/vite-plugin-ionic',
    website: 'https://github.com/DeJy/vite-plugin-ionic#readme',
  },
  source: {
    github: 'DeJy/vite-plugin-ionic',
    npm: 'vite-plugin-ionic',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 8,
    },
  },
})
