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
  links: {
    npm: 'https://www.npmjs.com/package/metadatafy',
  },
  source: {
    npm: 'metadatafy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 117,
      weekly: 22,
    },
  },
})
