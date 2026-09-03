import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@chuckcchen/vite-plugin',
  description: 'Core adapter plugin for EdgeOne platform - handles build artifacts, bundling, and deployment configuration',
  version: '1.0.21',
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
    npm: 'https://www.npmjs.com/package/@chuckcchen/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 150,
      weekly: 40,
    },
  },
})
