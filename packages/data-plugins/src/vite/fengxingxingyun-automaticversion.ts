import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fengxingxingyun/automaticversion',
  description: '一个兼容 Webpack / Vite（及 Vue / React 等框架）的自动版本写入插件，打包后生成 version.json 并复制 verifyVersion.js 到产物目录。',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'version',
    'webpack-plugin',
    'vite-plugin',
    'auto-version',
    'vue',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@fengxingxingyun/automaticversion',
  },
  stats: {
    downloads: {
      monthly: 607,
      weekly: 607,
    },
  },
})
