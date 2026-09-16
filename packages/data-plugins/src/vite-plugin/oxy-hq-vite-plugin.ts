import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oxy-hq/vite-plugin',
  description: 'Vite plugin for Oxy custom apps. Standardizes outDir, base path, manifest validation, and dev server config.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'oxy',
    'vite-plugin',
    'customer-apps',
  ],
  source: {
    github: 'oxy-hq/oxy-internal',
    npm: '@oxy-hq/vite-plugin',
  },
  links: {
    github: 'https://github.com/oxy-hq/oxy-internal',
    npm: 'https://www.npmjs.com/package/@oxy-hq/vite-plugin',
    website: 'https://github.com/oxy-hq/oxy-internal#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 243,
      weekly: 12,
    },
  },
})
