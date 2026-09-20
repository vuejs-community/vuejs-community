import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kawaijs/vite-plugin',
  description: 'Official Vite/Rollup plugin to import and hot-reload .kawa visual novel scripts directly',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'kawaijs',
    'vite-plugin',
    'vite',
    'rollup',
    'visual-novel',
  ],
  links: {
    github: 'https://github.com/biagio-scaglia/KawaiJS',
    npm: 'https://www.npmjs.com/package/@kawaijs/vite-plugin',
    website: 'https://github.com/biagio-scaglia/KawaiJS#readme',
  },
  source: {
    github: 'biagio-scaglia/KawaiJS',
    npm: '@kawaijs/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 962,
      weekly: 962,
    },
  },
})
