import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-transform-import',
  description: '一个在打包阶段把import函数转换为import命令的vite插件',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wensiyuanseven/transform-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-transform-import',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
