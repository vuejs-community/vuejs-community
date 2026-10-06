import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-style-scope',
  description: '构建期给 qiankun 子应用的全局样式添加 :where([data-qiankun="<appName>"]) 作用域前缀的 Vite 插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'qiankun',
    'css',
    'style-isolation',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-style-scope',
  },
  source: {
    npm: 'vite-plugin-style-scope',
  },
})
