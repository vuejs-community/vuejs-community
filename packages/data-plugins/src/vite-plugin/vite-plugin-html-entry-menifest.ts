import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-entry-menifest',
  description: '自动扫描 Vite 构建产物生成 manifest.json，并将 index.html 中的入口脚本替换为动态加载引导脚本（支持 CDN 托管）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'manifest',
    'cdn',
    'html',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-html-entry-menifest',
  },
  source: {
    npm: 'vite-plugin-html-entry-menifest',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 392,
      weekly: 392,
    },
  },
})
