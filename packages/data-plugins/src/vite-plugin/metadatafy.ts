import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'metadatafy',
  description: 'Build plugin for extracting project metadata for ticket analysis system',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'next-plugin',
    'metadata',
    'code-analysis',
    'ast',
  ],
  source: {
    npm: 'metadatafy',
  },
  links: {
    npm: 'https://www.npmjs.com/package/metadatafy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 117,
      weekly: 22,
    },
  },
})
