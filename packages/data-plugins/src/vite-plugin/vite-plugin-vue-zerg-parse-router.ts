import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-zerg-parse-router',
  description: 'vite的插件，用于将vue文件中的指定标签下的js对象转为可被vite插件使用的js对象',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zerg',
    'vite-plugin',
    'parse',
  ],
  source: {
    npm: 'vite-plugin-vue-zerg-parse-router',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-zerg-parse-router',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
