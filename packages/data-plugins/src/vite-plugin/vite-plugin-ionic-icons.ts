import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ionic-icons',
  description: 'Vite plugin that auto-detects and bundles only the Ionic icons your project uses — icon tree-shaking with zero config.',
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
    'icons',
    'svg',
    'tree-shaking',
    'react',
    'vue',
    'angular',
    'svelte',
    'mithril',
  ],
  links: {
    github: 'https://github.com/DeJy/vite-plugin-ionic-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-ionic-icons',
    website: 'https://github.com/DeJy/vite-plugin-ionic-icons#readme',
  },
  source: {
    github: 'DeJy/vite-plugin-ionic-icons',
    npm: 'vite-plugin-ionic-icons',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 6,
    },
  },
})
