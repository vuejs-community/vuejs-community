import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-plugin-adapter',
  description: 'Core adapter plugin for EdgeOne platform - handles build artifacts, bundling, and deployment configuration',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'edgeone',
    'adapter',
    'core',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-plugin-adapter',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 12,
    },
  },
})
