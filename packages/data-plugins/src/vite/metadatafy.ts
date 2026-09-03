import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'metadatafy',
  description: 'Build plugin for extracting project metadata for ticket analysis system',
  version: '1.5.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'next-plugin',
    'metadata',
    'code-analysis',
    'ast',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/metadatafy',
  },
  stats: {
    downloads: {
      monthly: 121,
      weekly: 4,
    },
  },
})
