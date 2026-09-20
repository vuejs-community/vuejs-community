import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@static-assets/vite',
  description: 'Vite helper for Static Assets',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'Static Assets',
    'Vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/StaticAssets/static-assets-vite',
    npm: 'https://www.npmjs.com/package/@static-assets/vite',
    website: 'https://github.com/StaticAssets/static-assets-vite#readme',
  },
  source: {
    github: 'StaticAssets/static-assets-vite',
    npm: '@static-assets/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
