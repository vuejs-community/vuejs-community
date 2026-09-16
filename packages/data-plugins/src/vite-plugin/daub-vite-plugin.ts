import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@daub/vite-plugin',
  description: 'Visual component context tool for AI-assisted UI development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ai',
    'devtools',
    'claude',
    'ui',
  ],
  source: {
    npm: '@daub/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@daub/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
