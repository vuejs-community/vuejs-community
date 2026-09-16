import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hmr-public-copy',
  description: 'Vite public to keep publicDir files synced during HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hmr',
  ],
  source: {
    github: 'davidwebca/vite-plugin-hmr-public-copy',
    npm: 'vite-plugin-hmr-public-copy',
  },
  links: {
    github: 'https://github.com/davidwebca/vite-plugin-hmr-public-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-hmr-public-copy',
    website: 'https://github.com/davidwebca/vite-plugin-hmr-public-copy',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 559,
      weekly: 105,
    },
  },
})
