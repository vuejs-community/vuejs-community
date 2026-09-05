import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-multi-input',
  description: 'A vite auto config multi html input plugin.一个根据入口目录扫描目录下的html文件并自动配置为多个html入口的Vite插件。',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'multi-html',
    'multi-input',
    'auto-config',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-multi-input',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-multi-input',
  },
  stats: {
    downloads: {
      monthly: 38,
      weekly: 6,
    },
  },
})
