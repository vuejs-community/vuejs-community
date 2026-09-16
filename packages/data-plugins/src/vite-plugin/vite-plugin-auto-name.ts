import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-name',
  description: '```npm npm install vite-plugin-auto-name ``` ### 使用 #### vite.config.ts 中如下： ```ts import { defineConfig } from \'vite\' import vue from \'@vitejs/plugin-vue\' // 插件 import autoName from \'vite-plugin-auto-name\'',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vue',
    'vite-plugin',
    'vite-plugin-auto-name',
  ],
  source: {
    npm: 'vite-plugin-auto-name',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-name',
    website: 'https://github.com/dengwenj/vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
