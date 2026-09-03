import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-name',
  description: '```npm npm install vite-plugin-auto-name ``` ### 使用 #### vite.config.ts 中如下： ```ts import { defineConfig } from \'vite\' import vue from \'@vitejs/plugin-vue\' // 插件 import autoName from \'vite-plugin-auto-name\'',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vue',
    'vite-plugin',
    'vite-plugin-auto-name',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-name',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 5,
    },
  },
})
