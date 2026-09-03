import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cesium-assets',
  description: 'A Vite plugin to automatically copy and serve Cesium library assets, enabling seamless Cesium integration in Vite projects.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/4Nameless4/vite-plugin-cesium-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-cesium-assets',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
