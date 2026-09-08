import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devlens',
  description: 'AI-powered error explainer and Lighthouse auditor for Vite dev servers. Shared daemon handles concurrency across multiple projects.',
  icon: 'logos:vite-icon',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'react',
    'nextjs',
    'ai',
    'debug',
    'developer-tools',
    'error-overlay',
    'lighthouse',
    'ollama',
    'dx',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'vetrivelanarsu/vite-plugin-devlens',
    npm: 'vite-plugin-devlens',
  },
  links: {
    github: 'https://github.com/vetrivelanarsu/vite-plugin-devlens',
    npm: 'https://www.npmjs.com/package/vite-plugin-devlens',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 0,
    },
  },
})
