import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@akagiyui/vite-plugin-image-prefetch',
  description: 'Vite 插件：构建时自动收集指定目录的图片资源，注入 <link rel="prefetch/preload"> 脚本实现图片预加载',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'prefetch',
    'preload',
    'performance',
    'optimization',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-image-prefetch',
    npm: 'https://www.npmjs.com/package/@akagiyui/vite-plugin-image-prefetch',
  },
  stats: {
    downloads: {
      monthly: 113,
      weekly: 11,
    },
  },
})
