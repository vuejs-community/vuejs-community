import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@cxkit/version-vite-plugin',
  description: 'Vite plugin for generating version manifest and injecting build metadata.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version-manifest',
    'version-json',
    'build-id',
    'cache-busting',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@cxkit/version-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 10,
    },
  },
})
