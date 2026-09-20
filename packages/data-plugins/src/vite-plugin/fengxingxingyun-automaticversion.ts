import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fengxingxingyun/automaticversion',
  description: '一个兼容 Webpack / Vite（及 Vue / React 等框架）的自动版本写入插件，打包后生成 version.json 并复制 verifyVersion.js 到产物目录。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'version',
    'webpack-plugin',
    'vite-plugin',
    'auto-version',
    'vue',
    'react',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fengxingxingyun/automaticversion',
  },
  source: {
    npm: '@fengxingxingyun/automaticversion',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 643,
      weekly: 7,
    },
  },
})
