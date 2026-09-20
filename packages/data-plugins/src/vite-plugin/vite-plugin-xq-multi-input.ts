import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-xq-multi-input',
  description: 'A vite plugin that scans html files under entry directories and auto-configures multiple html inputs.一个根据入口目录扫描 html 文件并自动配置多个 html 入口的 Vite 插件。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'multi-html',
    'multi-input',
    'auto-config',
  ],
  links: {
    github: 'https://github.com/xqkeji/vite-plugin-xq-multi-input',
    npm: 'https://www.npmjs.com/package/vite-plugin-xq-multi-input',
    website: 'http://xqkeji.cn/',
  },
  source: {
    github: 'xqkeji/vite-plugin-xq-multi-input',
    npm: 'vite-plugin-xq-multi-input',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
