import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lac-sdk',
  description: 'vite配置插件，适用于geovis-lac-sdk npm安装包，vite 项目配置',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webGL',
    'map',
    'geovis-lac-sdk',
  ],
  source: {
    npm: 'vite-plugin-lac-sdk',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-lac-sdk',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
