import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'click-review',
  description: 'AI 写完页面后，人来批量验收：dev 页面点元素写评论 → 点「要修」→ Claude 自动修复回执。dev-only，Vite + React。',
  version: '0.13.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'feedback',
    'review',
    'claude-code',
    'dev-tools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hong-arch/click-and-review',
    npm: 'https://www.npmjs.com/package/click-review',
  },
  stats: {
    downloads: {
      monthly: 209,
      weekly: 7,
    },
  },
})
