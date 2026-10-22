import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-preloader',
  description: 'Vite 智能路由预加载插件 - dev 注入 modulepreload，build 运行时注入 prefetch',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'preload',
    'prefetch',
    'modulepreload',
    'lazy-loading',
    'routes',
    'performance',
  ],
  links: {
    github: 'https://github.com/ChenyCHENYU/vite-plugin-preloader',
    npm: 'https://www.npmjs.com/package/vite-plugin-preloader',
    website: 'https://github.com/ChenyCHENYU/vite-plugin-preloader#readme',
  },
  source: {
    github: 'ChenyCHENYU/vite-plugin-preloader',
    npm: 'vite-plugin-preloader',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 37,
      weekly: 8,
    },
  },
})
