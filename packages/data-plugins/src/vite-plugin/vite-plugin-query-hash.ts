import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-query-hash',
  description: 'Vite plugin that adds a query param hash to assets via the manifest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vitejs',
    'plugin',
  ],
  links: {
    github: 'https://github.com/Infomaniak/vite-plugin-query-hash',
    npm: 'https://www.npmjs.com/package/vite-plugin-query-hash',
    website: 'https://github.com/Infomaniak/vite-plugin-query-hash#readme',
  },
  source: {
    github: 'Infomaniak/vite-plugin-query-hash',
    npm: 'vite-plugin-query-hash',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 730,
      weekly: 246,
    },
  },
})
