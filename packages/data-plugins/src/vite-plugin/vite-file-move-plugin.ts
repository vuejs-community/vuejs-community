import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-file-move-plugin',
  description: 'Vite 插件：打包后移动指定文件/目录到目标位置，支持 glob/正则匹配',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'file-move',
    'build',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-file-move-plugin',
  },
  source: {
    npm: 'vite-file-move-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
