import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-plugin-adapter',
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
  links: {
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-plugin-adapter',
  },
  source: {
    npm: '@chuckcchen/vite-plugin-adapter',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
