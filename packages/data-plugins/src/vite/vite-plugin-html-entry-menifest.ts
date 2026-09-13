import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-entry-menifest',
  description: '自动扫描 Vite 构建产物生成 manifest.json，并将 index.html 中的入口脚本替换为动态加载引导脚本（支持 CDN 托管）',
  icon: 'logos:vite-icon',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'manifest',
    'cdn',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-html-entry-menifest',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-entry-menifest',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
