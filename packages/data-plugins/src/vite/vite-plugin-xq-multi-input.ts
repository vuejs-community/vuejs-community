import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-multi-input',
  description: 'A vite auto config multi html input plugin.一个根据入口目录扫描目录下的html文件并自动配置为多个html入口的Vite插件。',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'xqkeji/vite-plugin-xq-multi-input',
    npm: 'vite-plugin-xq-multi-input',
  },
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-multi-input',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-multi-input',
  },
  stats: {
    downloads: {
      monthly: 41,
      weekly: 6,
    },
  },
})
