import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-add-timestamp',
  description: '一个在打包阶段给vite模板(html)中的.js,.css文件添加时间戳的插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'wensiyuanseven/vite-add-timestamp',
    npm: 'vite-plugin-add-timestamp',
  },
  links: {
    github: 'https://github.com/wensiyuanseven/vite-add-timestamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-add-timestamp',
    website: 'https://github.com/wensiyuanseven/vite-add-timestamp#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 154,
      weekly: 36,
    },
  },
})
