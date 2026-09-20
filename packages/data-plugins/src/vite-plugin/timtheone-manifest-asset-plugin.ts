import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@timtheone/manifest-asset-plugin',
  description: 'Vite plugin that generates manifest-asset.json from the Vite manifest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'manifest',
  ],
  links: {
    github: 'https://github.com/timtheone/manifest-asset-plugin',
    npm: 'https://www.npmjs.com/package/@timtheone/manifest-asset-plugin',
    website: 'https://github.com/timtheone/manifest-asset-plugin',
  },
  source: {
    github: 'timtheone/manifest-asset-plugin',
    npm: '@timtheone/manifest-asset-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
