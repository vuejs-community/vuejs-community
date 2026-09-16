import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-cesium',
  description: 'A plugin use for vite+electron framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
  ],
  source: {
    npm: 'vite-plugin-electron-cesium',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-cesium',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
