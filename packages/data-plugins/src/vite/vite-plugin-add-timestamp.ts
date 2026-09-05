import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-timestamp',
  description: '一个在打包阶段给vite模板(html)中的.js,.css文件添加时间戳的插件',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wensiyuanseven/vite-add-timestamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-add-timestamp',
  },
  stats: {
    downloads: {
      monthly: 122,
      weekly: 39,
    },
  },
})
