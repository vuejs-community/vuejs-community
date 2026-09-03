import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@edgeone/vite-core',
  description: 'Core adapter plugin for EdgeOne platform - handles build artifacts, bundling, and deployment configuration',
  version: '1.1.0',
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
    npm: 'https://www.npmjs.com/package/@edgeone/vite-core',
  },
  stats: {
    downloads: {
      monthly: 514,
      weekly: 117,
    },
  },
})
