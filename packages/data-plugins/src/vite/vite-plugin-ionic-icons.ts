import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ionic-icons',
  description: 'Vite plugin that auto-detects and bundles only the Ionic icons your project uses — icon tree-shaking with zero config.',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ionic',
    'ionic-framework',
    'icons',
    'svg',
    'tree-shaking',
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
    github: 'https://github.com/DeJy/vite-plugin-ionic-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-ionic-icons',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
