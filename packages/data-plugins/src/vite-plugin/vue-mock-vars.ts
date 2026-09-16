import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vue-mock-vars',
  description: '一个在vue中mock变量的插件，用于在vue文件中使用生成动态的mock数据。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'mock',
    'ref',
    'reactive',
    'data-generation',
  ],
  source: {
    github: 'HugStars/vue-mock-vars',
    npm: 'vue-mock-vars',
  },
  links: {
    github: 'https://github.com/HugStars/vue-mock-vars',
    npm: 'https://www.npmjs.com/package/vue-mock-vars',
    website: 'https://github.com/HugStars/vue-mock-vars#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 40,
      weekly: 6,
    },
  },
})
