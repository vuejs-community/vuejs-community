import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-property-paths-to-types',
  description: 'Vite 插件：自动生成属性路径对应的类型定义',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'type-generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cao5zy/vite-plugin-property-paths-to-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-property-paths-to-types',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 4,
    },
  },
})
