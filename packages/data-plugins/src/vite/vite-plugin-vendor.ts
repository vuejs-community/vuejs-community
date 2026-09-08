import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vendor',
  description: 'Generates vendor bundles based on the specified options',
  icon: 'logos:vite-icon',
  version: '1.3.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vendor',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-vendor',
  },
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-vendor',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
