import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-simple-sidebar',
  description: '自动生成 vitepress 侧边栏目录的插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vitepress',
    'vitepress sidebar',
  ],
  links: {
    github: 'https://github.com/lijiayuan365/vite-plugin-vitepress-sidebar',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-simple-sidebar',
    website: 'https://github.com/lijiayuan365/vite-plugin-vitepress-sidebar#readme',
  },
  source: {
    github: 'lijiayuan365/vite-plugin-vitepress-sidebar',
    npm: 'vite-plugin-vitepress-simple-sidebar',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
