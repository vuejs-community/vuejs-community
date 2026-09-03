import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'agoda-devfeedback-vite',
  description: 'Vite plugin for collecting and reporting development feedback metrics',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'metrics',
    'development',
    'hmr',
    'performance',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/agoda-com/devfeedback-vite',
    npm: 'https://www.npmjs.com/package/agoda-devfeedback-vite',
  },
  stats: {
    downloads: {
      monthly: 125,
      weekly: 5,
    },
  },
})
