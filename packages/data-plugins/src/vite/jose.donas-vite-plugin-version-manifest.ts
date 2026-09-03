import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jose.donas/vite-plugin-version-manifest',
  description: 'A Vite plugin to generate a version manifest file with build metadata.',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version-manifest',
    'build-metadata',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jgdonas/vite-plugin-version-manifest',
    npm: 'https://www.npmjs.com/package/@jose.donas/vite-plugin-version-manifest',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 11,
    },
  },
})
