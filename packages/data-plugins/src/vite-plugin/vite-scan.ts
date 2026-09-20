import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-scan',
  description: 'A Vite DevTools plugin that scans and highlights high-churn DOM updates in the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'performance',
    'scan',
  ],
  links: {
    github: 'https://github.com/arashsheyda/vite-scan',
    npm: 'https://www.npmjs.com/package/vite-scan',
    website: 'https://github.com/arashsheyda/vite-scan#readme',
  },
  source: {
    github: 'arashsheyda/vite-scan',
    npm: 'vite-scan',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
