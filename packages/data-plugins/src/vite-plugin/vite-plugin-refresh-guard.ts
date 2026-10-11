import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-refresh-guard',
  description: 'Vite plugin for web update notification — detect a new version on every page load and prompt users to reload: silent auto reload, force refresh, toast prompt, or blocking modal. Framework-agnostic core with Vue and React adapters. Vite 应用版本更新检测与自动刷新方案。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'web-update-notification',
    'update-notification',
    'new-version',
    'version-check',
    'app-update',
    'auto-reload',
    'auto-refresh',
    'force-refresh',
    'refresh',
    'service-worker',
    'pwa',
    'changelog',
    'vue',
    'react',
    '更新提示',
  ],
  links: {
    github: 'https://github.com/webkubor/vite-plugin-refresh-guard',
    npm: 'https://www.npmjs.com/package/vite-plugin-refresh-guard',
    website: 'https://github.com/webkubor/vite-plugin-refresh-guard#readme',
  },
  source: {
    github: 'webkubor/vite-plugin-refresh-guard',
    npm: 'vite-plugin-refresh-guard',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 1389,
      weekly: 75,
    },
  },
})
