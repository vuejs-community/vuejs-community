import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@schemacompany/vite',
  description: 'Vite plugin for build-time schema injection',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'schema.org',
    'json-ld',
    'seo',
    'structured-data',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theschemacompany/sdks',
    npm: 'https://www.npmjs.com/package/@schemacompany/vite',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
