import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@notiv/vite-plugin-vue-svg',
  description: 'Import SVG files as Vue Components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'svgo',
    'vite',
    'vue',
    'vue3',
  ],
  source: {
    github: 'visualfanatic/vite-svg',
    npm: '@notiv/vite-plugin-vue-svg',
  },
  links: {
    github: 'https://github.com/visualfanatic/vite-svg',
    npm: 'https://www.npmjs.com/package/@notiv/vite-plugin-vue-svg',
    website: 'https://github.com/visualfanatic/vite-svg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
