import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devlens',
  description: 'AI-powered error explainer and Lighthouse auditor for Vite dev servers. Shared daemon handles concurrency across multiple projects.',
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
  links: {
    github: 'https://github.com/vetrivelanarsu/vite-plugin-devlens',
    npm: 'https://www.npmjs.com/package/vite-plugin-devlens',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 0,
    },
  },
})
