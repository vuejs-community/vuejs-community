import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vitepress-simple-sidebar',
  description: '自动生成 vitepress 侧边栏目录的插件',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vitepress',
    'vitepress sidebar',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lijiayuan365/vite-plugin-vitepress-sidebar',
    npm: 'https://www.npmjs.com/package/vite-plugin-vitepress-simple-sidebar',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
