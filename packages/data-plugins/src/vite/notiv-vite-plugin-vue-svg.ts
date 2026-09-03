import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@notiv/vite-plugin-vue-svg',
  description: 'Import SVG files as Vue Components',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svg',
    'svgo',
    'vite',
    'vue',
    'vue3',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/visualfanatic/vite-svg',
    npm: 'https://www.npmjs.com/package/@notiv/vite-plugin-vue-svg',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 5,
    },
  },
})
