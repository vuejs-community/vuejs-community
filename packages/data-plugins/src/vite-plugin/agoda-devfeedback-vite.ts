import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'agoda-devfeedback-vite',
  description: 'Vite plugin for collecting and reporting development feedback metrics',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'metrics',
    'development',
    'hmr',
    'performance',
  ],
  source: {
    github: 'agoda-com/devfeedback-vite',
    npm: 'agoda-devfeedback-vite',
  },
  links: {
    github: 'https://github.com/agoda-com/devfeedback-vite',
    npm: 'https://www.npmjs.com/package/agoda-devfeedback-vite',
    website: 'https://github.com/agoda-com/devfeedback-vite#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 61,
      weekly: 2,
    },
  },
})
