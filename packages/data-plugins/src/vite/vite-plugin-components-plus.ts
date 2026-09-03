import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-components-plus',
  description: '一个可以自动重命名index.vue的vite插件，自动给index.vue组件重命名为文件夹的名称，也可手动使用name属性来命名组件',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vue3',
    'vite-plugin',
    'vite-plugin-components-plus',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-components-plus',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 6,
    },
  },
})
