import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-file-move-plugin',
  description: 'Vite 插件：打包后移动指定文件/目录到目标位置，支持 glob/正则匹配',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'file-move',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-file-move-plugin',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
