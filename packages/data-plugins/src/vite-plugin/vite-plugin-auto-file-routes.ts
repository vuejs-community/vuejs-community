import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-file-routes',
  description: 'Vite 插件：按目录约定扫描 .vue 文件，自动生成 Vue Router 路由表',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vue-router',
    'routes',
    'file-based-routing',
    'auto-routes',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-file-routes',
  },
  source: {
    npm: 'vite-plugin-auto-file-routes',
  },
})
