import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-dev-bot',
  description: 'Vite/Next.js 플러그인 — 브라우저에서 Claude Code와 대화 + 컴포넌트 인스펙터.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'next.js',
    'nextjs',
    'claude',
    'claude-code',
    'dev-tools',
    'debugging',
    'inspector',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/react-dev-bot',
  },
  source: {
    npm: 'react-dev-bot',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1603,
      weekly: 127,
    },
  },
})
