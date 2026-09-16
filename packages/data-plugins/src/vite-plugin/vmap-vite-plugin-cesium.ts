import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vmap/vite-plugin-cesium',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webGL',
    'cesium',
    'cesium-vue',
  ],
  source: {
    github: 'parselife/vmap',
    npm: '@vmap/vite-plugin-cesium',
  },
  links: {
    github: 'https://github.com/parselife/vmap',
    npm: 'https://www.npmjs.com/package/@vmap/vite-plugin-cesium',
    website: 'https://github.com/parselife/vmap',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
