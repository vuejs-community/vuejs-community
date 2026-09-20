import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lib-emit-assets',
  description: 'Vite 插件：提取 lib 构建模式下引用到的资源文件，取代 base64 内联形式',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'emit lib assets',
  ],
  links: {
    github: 'https://github.com/GcsSloop/vite-plugin-lib-emit-assets',
    npm: 'https://www.npmjs.com/package/vite-plugin-lib-emit-assets',
    website: 'https://github.com/GcsSloop/vite-plugin-lib-emit-assets',
  },
  source: {
    github: 'GcsSloop/vite-plugin-lib-emit-assets',
    npm: 'vite-plugin-lib-emit-assets',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 26,
      weekly: 2,
    },
  },
})
