import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ai-admin-platform/build-tools',
  description: 'AI-Admin Platform 插件前端构建期工具集：vite 插件、plugin.yaml 校验（ajv）、产物契约检查',
  version: '2.4.0',
  category: 'plugin',
  tags: [
    'ai-admin-platform',
    'vite-plugin',
    'build-tools',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@ai-admin-platform/build-tools',
  },
  stats: {
    downloads: {
      monthly: 794,
      weekly: 17,
    },
  },
})
