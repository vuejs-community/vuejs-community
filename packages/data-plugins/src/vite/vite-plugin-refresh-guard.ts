import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-refresh-guard',
  description: 'Vite 应用的可配置版本更新检测+刷新方案：静默自动刷新 / 提示后自动刷新 / 弹窗阻断，按产品需要选档位，核心逻辑框架无关，附 Vue/React 适配层。Configurable new-version detection + refresh for Vite apps — silent / toast-auto / modal-blocking, framework-agnostic core with Vue and React adapters.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version-check',
    'app-update',
    'service-worker',
    'pwa',
    'refresh',
    'changelog',
    'vue',
    'react',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/webkubor/vite-plugin-refresh-guard',
    npm: 'https://www.npmjs.com/package/vite-plugin-refresh-guard',
  },
  stats: {
    downloads: {
      monthly: 1305,
      weekly: 103,
    },
  },
})
