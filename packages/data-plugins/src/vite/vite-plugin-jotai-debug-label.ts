import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jotai-debug-label',
  description: 'Vite 插件：为 Jotai atom 自动补充 debugLabel，便于在 devtools 中按变量名识别状态',
  icon: 'logos:vite-icon',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'jotai',
    'debug-label',
    'devtools',
    'react',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'AkagiYui/vite-plugin-jotai-debug-label',
    npm: 'vite-plugin-jotai-debug-label',
  },
  links: {
    github: 'https://github.com/AkagiYui/vite-plugin-jotai-debug-label',
    npm: 'https://www.npmjs.com/package/vite-plugin-jotai-debug-label',
  },
  stats: {
    downloads: {
      monthly: 469,
      weekly: 13,
    },
  },
})
