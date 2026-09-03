import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@fusion-module/vite-plugin-module-manifest',
  description: 'Vite plugin that emits a fusion-module manifest.json next to the build output.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'fusion-module',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@fusion-module/vite-plugin-module-manifest',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
