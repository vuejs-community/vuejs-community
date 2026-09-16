import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ai-fixer',
  description: 'Vite plugin that captures build errors and provides AI-powered solutions',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'build-error',
    'error-analysis',
  ],
  source: {
    npm: 'vite-plugin-ai-fixer',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-ai-fixer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
