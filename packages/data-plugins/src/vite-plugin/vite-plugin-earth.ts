import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-earth',
  description: 'Cesium & Mars3D library plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'cesium',
    'mars3d',
  ],
  links: {
    github: 'https://github.com/hfxtsk/vite-plugin-earth',
    npm: 'https://www.npmjs.com/package/vite-plugin-earth',
    website: 'https://github.com/hfxtsk/vite-plugin-earth#readme',
  },
  source: {
    github: 'hfxtsk/vite-plugin-earth',
    npm: 'vite-plugin-earth',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 39,
      weekly: 3,
    },
  },
})
