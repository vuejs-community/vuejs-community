import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@agent-anvil-platform/vite-plugin-anvil-frontend',
  description: 'Agent Anvil 平台插件前端 Vite 插件 —— 4 子模块自动注入（metadata / devServer / bridge / manifest）',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'agent-anvil-platform',
    'vite-plugin',
    'frontend',
    'plugin',
  ],
  source: {
    npm: '@agent-anvil-platform/vite-plugin-anvil-frontend',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@agent-anvil-platform/vite-plugin-anvil-frontend',
    website: 'https://gitee.com/agent-anvil/agent-anvil-platform-sdk/tree/master/packages/vite-plugin-anvil-frontend',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 474,
      weekly: 474,
    },
  },
})
