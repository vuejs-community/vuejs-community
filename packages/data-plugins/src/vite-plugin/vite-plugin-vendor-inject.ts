import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vendor-inject',
  description: 'Vite plugin to inject vendor files into build output',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-vendor-inject',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-vendor-inject',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
