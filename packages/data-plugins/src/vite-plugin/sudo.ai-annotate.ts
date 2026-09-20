import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sudo.ai/annotate',
  description: '开发模式下的前端批注 lib：在跑着的页面上圈选元素写修改意见，一键复制成带源码行列位置的 markdown 交给 AI agent。Annotate a running page, export file:line-anchored markdown for coding agents.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'annotate',
    'devtools',
    'vite-plugin',
    'babel-plugin',
    'jsx-source',
    'ai-agent',
    'code-location',
    'developer-experience',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@sudo.ai/annotate',
  },
  source: {
    npm: '@sudo.ai/annotate',
  },
})
