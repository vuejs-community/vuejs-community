import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-client',
  description: 'Provides a HTTP client based on a OpenAPI specification',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-open-client',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
