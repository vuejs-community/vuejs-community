import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-anvil-platform/build-tools',
  description: 'agent-anvil Platform 插件前端构建期工具集：vite 插件、plugin.yaml 校验（ajv）、产物契约检查',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-anvil-platform',
    'vite-plugin',
    'build-tools',
    'plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@agent-anvil-platform/build-tools',
    website: 'https://gitee.com/agent-anvil/agent-anvil-platform-sdk/tree/master/packages/build-tools',
  },
  source: {
    npm: '@agent-anvil-platform/build-tools',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 696,
      weekly: 483,
    },
  },
})
