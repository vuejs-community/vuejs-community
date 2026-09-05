import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-zerg-parse-router',
  description: 'vite的插件，用于将vue文件中的指定标签下的js对象转为可被vite插件使用的js对象',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'zerg',
    'vite-plugin',
    'parse',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-zerg-parse-router',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 0,
    },
  },
})
