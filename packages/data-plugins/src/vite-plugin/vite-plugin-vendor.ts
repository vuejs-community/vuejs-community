import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vendor',
  description: 'Generates vendor bundles based on the specified options',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vendor',
  ],
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-vendor',
  },
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-vendor',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-vendor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
