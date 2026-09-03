import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hmr-public-copy',
  description: 'Vite public to keep publicDir files synced during HMR',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/davidwebca/vite-plugin-hmr-public-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-hmr-public-copy',
  },
  stats: {
    downloads: {
      monthly: 537,
      weekly: 230,
    },
  },
})
