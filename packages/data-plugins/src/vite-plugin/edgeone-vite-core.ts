import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@edgeone/vite-core',
  description: 'Core adapter plugin for EdgeOne platform - handles build artifacts, bundling, and deployment configuration',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'edgeone',
    'adapter',
    'core',
  ],
  source: {
    npm: '@edgeone/vite-core',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@edgeone/vite-core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 522,
      weekly: 77,
    },
  },
})
