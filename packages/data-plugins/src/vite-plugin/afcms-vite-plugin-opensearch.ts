import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@afcms/vite-plugin-opensearch',
  description: 'Generate OpenSearch 1.1 browser search descriptions with Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browser-search',
    'opensearch',
    'vite-plugin',
    'xml',
  ],
  links: {
    github: 'https://github.com/AFCMS/vite-plugin-opensearch',
    npm: 'https://www.npmjs.com/package/@afcms/vite-plugin-opensearch',
    website: 'https://github.com/AFCMS/vite-plugin-opensearch#readme',
  },
  source: {
    github: 'AFCMS/vite-plugin-opensearch',
    npm: '@afcms/vite-plugin-opensearch',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 352,
      weekly: 77,
    },
  },
})
