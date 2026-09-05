import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lac-sdk',
  description: 'vite配置插件，适用于geovis-lac-sdk npm安装包，vite 项目配置',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'webGL',
    'map',
    'geovis-lac-sdk',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-lac-sdk',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
