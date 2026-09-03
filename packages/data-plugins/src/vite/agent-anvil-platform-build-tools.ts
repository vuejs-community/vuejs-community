import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@agent-anvil-platform/build-tools',
  description: 'agent-anvil Platform 插件前端构建期工具集：vite 插件、plugin.yaml 校验（ajv）、产物契约检查',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'agent-anvil-platform',
    'vite-plugin',
    'build-tools',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@agent-anvil-platform/build-tools',
  },
  stats: {
    downloads: {
      monthly: 202,
      weekly: 18,
    },
  },
})
