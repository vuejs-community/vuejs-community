import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oxy-hq/vite-plugin',
  description: 'Vite plugin for Oxy custom apps. Standardizes outDir, base path, manifest validation, and dev server config.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'oxy',
    'vite-plugin',
    'customer-apps',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/oxy-hq/oxy-internal',
    npm: 'https://www.npmjs.com/package/@oxy-hq/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 220,
      weekly: 205,
    },
  },
})
