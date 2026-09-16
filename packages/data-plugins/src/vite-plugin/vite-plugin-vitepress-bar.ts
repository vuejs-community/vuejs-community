import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-bar',
  description: '为 vitepress 自动生成 nav 和 sidebar',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vitepress',
    'vitepress-bar',
    'vitepress-plugin',
  ],
  source: {
    github: 'onlymisaky/vite-plugin-vitepress-bar',
    npm: 'vite-plugin-vitepress-bar',
  },
  links: {
    github: 'https://github.com/onlymisaky/vite-plugin-vitepress-bar',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-bar',
    website: 'https://github.com/onlymisaky/vite-plugin-vitepress-bar#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
