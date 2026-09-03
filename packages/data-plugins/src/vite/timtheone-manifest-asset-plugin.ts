import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@timtheone/manifest-asset-plugin',
  description: 'Vite plugin that generates manifest-asset.json from the Vite manifest',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/timtheone/manifest-asset-plugin',
    npm: 'https://www.npmjs.com/package/@timtheone/manifest-asset-plugin',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
