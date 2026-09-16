import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@akagiyui/vite-plugin-image-prefetch',
  description: 'Vite 插件：构建时自动收集指定目录的图片资源，注入 <link rel="prefetch/preload"> 脚本实现图片预加载',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'image',
    'prefetch',
    'preload',
    'performance',
    'optimization',
  ],
  source: {
    github: 'AkagiYui/vite-plugin-image-prefetch',
    npm: '@akagiyui/vite-plugin-image-prefetch',
  },
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-image-prefetch',
    npm: 'https://www.npmjs.com/package/@akagiyui/vite-plugin-image-prefetch',
    website: 'https://github.com/AkagiYui/vite-plugin-image-prefetch',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 56,
      weekly: 7,
    },
  },
})
