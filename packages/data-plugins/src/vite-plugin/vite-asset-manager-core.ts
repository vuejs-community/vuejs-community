import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-asset-manager/core',
  description: 'Core functionality for vite-plugin-asset-manager',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'assets',
    'asset-manager',
    'vite-plugin',
  ],
  source: {
    github: 'ejirocodes/vite-plugin-asset-manager',
    npm: '@vite-asset-manager/core',
  },
  links: {
    github: 'https://github.com/ejirocodes/vite-plugin-asset-manager',
    npm: 'https://www.npmjs.com/package/@vite-asset-manager/core',
    website: 'https://github.com/ejirocodes/vite-plugin-asset-manager#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 216,
      weekly: 46,
    },
  },
})
