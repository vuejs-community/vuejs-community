import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-create',
  description: '一个vite插件, 在vite打包时创建文件并保存至输出目录',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-file-create',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
