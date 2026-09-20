import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ai-admin-platform/build-tools',
  description: 'AI-Admin Platform 插件前端构建期工具集：vite 插件、plugin.yaml 校验（ajv）、产物契约检查',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ai-admin-platform',
    'vite-plugin',
    'build-tools',
    'plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ai-admin-platform/build-tools',
    website: 'https://gitee.com/XimfengYao/ai-admin-platform/tree/master/ai-admin-frontend/packages/build-tools',
  },
  source: {
    npm: '@ai-admin-platform/build-tools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 124,
      weekly: 13,
    },
  },
})
