import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lib-emit-assets',
  description: 'Vite 插件：提取 lib 构建模式下引用到的资源文件，取代 base64 内联形式',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'emit lib assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/GcsSloop/vite-plugin-lib-emit-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-lib-emit-assets',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
