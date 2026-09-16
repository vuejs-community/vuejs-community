import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eruda-tool',
  description: 'H5 游戏移动端调试面板 — Token 同步、控制台日志、localStorage 查看，飞书 webhook 一键推送，插件式 Tab 架构',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'eruda',
    'eruda-plugin',
    'vconsole',
    'token',
    'debug',
    'h5',
    'feishu',
    'lark',
    'vite-plugin',
    'devtool',
  ],
  source: {
    github: 'jany555/eruda-tool',
    npm: 'eruda-tool',
  },
  links: {
    github: 'https://github.com/jany555/eruda-tool',
    npm: 'https://www.npmjs.com/package/eruda-tool',
    website: 'https://github.com/jany555/eruda-tool#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 78,
      weekly: 78,
    },
  },
})
