import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-scan',
  description: 'A Vite DevTools plugin that scans and highlights high-churn DOM updates in the browser.',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'performance',
    'scan',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/arashsheyda/vite-scan',
    npm: 'https://www.npmjs.com/package/vite-scan',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 0,
    },
  },
})
