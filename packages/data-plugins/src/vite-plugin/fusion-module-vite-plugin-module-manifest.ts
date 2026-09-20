import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fusion-module/vite-plugin-module-manifest',
  description: 'Vite plugin that emits a fusion-module manifest.json next to the build output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'fusion-module',
    'manifest',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@fusion-module/vite-plugin-module-manifest',
  },
  source: {
    npm: '@fusion-module/vite-plugin-module-manifest',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
