import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-perf-gate',
  description: 'Vite build-time performance gate: enforce bundle size, gzip size, chunk count and baseline regression budgets, then block the build when they are exceeded. Optionally gates the first-screen JS/CSS closure separately.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitejs',
    'performance',
    'perf',
    'budget',
    'performance-budget',
    'bundle-size',
    'bundle-analyzer',
    'chunk',
    'gate',
    'baseline',
    'regression',
    'ci',
    'size-limit',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-perf-gate',
    website: 'https://gitee.com/XUXIAOLONG1029/vite-plugin-perf-gate#readme',
  },
  source: {
    npm: 'vite-plugin-perf-gate',
  },
})
