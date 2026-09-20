import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-transform-import',
  description: '一个在打包阶段把import函数转换为import命令的vite插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wensiyuanseven/transform-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-transform-import',
    website: 'https://github.com/wensiyuanseven/transform-import#readme',
  },
  source: {
    github: 'wensiyuanseven/transform-import',
    npm: 'vite-plugin-vue-transform-import',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
