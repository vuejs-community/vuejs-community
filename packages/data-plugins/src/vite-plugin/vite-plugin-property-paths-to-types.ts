import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-property-paths-to-types',
  description: 'Vite 插件：自动生成属性路径对应的类型定义',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'type-generator',
  ],
  source: {
    github: 'cao5zy/vite-plugin-property-paths-to-types',
    npm: 'vite-plugin-property-paths-to-types',
  },
  links: {
    github: 'https://github.com/cao5zy/vite-plugin-property-paths-to-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-property-paths-to-types',
    website: 'https://github.com/cao5zy/vite-plugin-property-paths-to-types#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
