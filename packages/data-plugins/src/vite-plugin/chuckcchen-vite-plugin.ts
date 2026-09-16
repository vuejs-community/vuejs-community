import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-plugin',
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
    npm: '@chuckcchen/vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 111,
      weekly: 3,
    },
  },
})
