import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-id',
  description: 'Automatically generates build_id after production compiled',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-id',
  },
  source: {
    npm: 'vite-plugin-build-id',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1421,
      weekly: 169,
    },
  },
})
