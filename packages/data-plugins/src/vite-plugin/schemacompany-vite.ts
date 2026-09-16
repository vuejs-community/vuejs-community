import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@schemacompany/vite',
  description: 'Vite plugin for build-time schema injection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'schema.org',
    'json-ld',
    'seo',
    'structured-data',
  ],
  source: {
    github: 'theschemacompany/sdks',
    npm: '@schemacompany/vite',
  },
  links: {
    github: 'https://github.com/theschemacompany/sdks',
    npm: 'https://www.npmjs.com/package/@schemacompany/vite',
    website: 'https://github.com/theschemacompany/sdks#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
