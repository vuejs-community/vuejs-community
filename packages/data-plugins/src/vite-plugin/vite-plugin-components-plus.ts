import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-components-plus',
  description: '一个可以自动重命名index.vue的vite插件，自动给index.vue组件重命名为文件夹的名称，也可手动使用name属性来命名组件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vue3',
    'vite-plugin',
    'vite-plugin-components-plus',
  ],
  source: {
    npm: 'vite-plugin-components-plus',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-components-plus',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
