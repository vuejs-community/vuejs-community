import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-create',
  description: '一个vite插件, 在vite打包时创建文件并保存至输出目录',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-file-create',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-file-create',
    website: 'https://github.com/Hxy1992/vite-plugin-file-create',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
