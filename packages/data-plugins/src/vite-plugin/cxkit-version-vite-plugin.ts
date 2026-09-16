import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cxkit/version-vite-plugin',
  description: 'Vite plugin for generating version manifest and injecting build metadata.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version-manifest',
    'version-json',
    'build-id',
    'cache-busting',
  ],
  source: {
    npm: '@cxkit/version-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@cxkit/version-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
