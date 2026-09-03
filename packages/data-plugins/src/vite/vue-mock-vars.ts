import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vue-mock-vars',
  description: '一个在vue中mock变量的插件，用于在vue文件中使用生成动态的mock数据。',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'mock',
    'ref',
    'reactive',
    'data-generation',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/HugStars/vue-mock-vars',
    npm: 'https://www.npmjs.com/package/vue-mock-vars',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 10,
    },
  },
})
