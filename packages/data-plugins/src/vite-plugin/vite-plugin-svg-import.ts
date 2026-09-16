import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-import',
  description: 'Vite plugin to load SVG files as Vue components, URLs or raw strings',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'vue',
    'svg',
  ],
  source: {
    npm: 'vite-plugin-svg-import',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-import',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 66,
      weekly: 9,
    },
  },
})
