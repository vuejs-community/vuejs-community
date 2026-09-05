import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-agent-eyes',
  description: '给 AI agent 的自愈遥测层：结构化运行时日志（API/错误/交互/代理 header）+ 本地 cookie 修复 + 登录态画像 + 提交前风险门禁。Agent-readable runtime telemetry, interaction traces, auth profile hints, and pre-commit guard for Vite dev.',
  version: '0.14.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ai-agent',
    'debugging',
    'telemetry',
    'self-healing',
    'proxy',
    'cookie',
    'auth',
    'interaction-trace',
    'git-hooks',
    'pre-commit',
    'guard',
    'webhook',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/webkubor/vite-plugin-agent-eyes',
    npm: 'https://www.npmjs.com/package/vite-plugin-agent-eyes',
  },
  stats: {
    downloads: {
      monthly: 1430,
      weekly: 129,
    },
  },
})
