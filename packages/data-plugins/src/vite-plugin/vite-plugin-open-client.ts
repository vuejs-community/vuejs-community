import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-client',
  description: 'Provides a HTTP client based on a OpenAPI specification',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-open-client',
  },
  source: {
    npm: 'vite-plugin-open-client',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
