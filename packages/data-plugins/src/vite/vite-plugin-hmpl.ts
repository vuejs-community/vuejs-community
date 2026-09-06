import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hmpl',
  description: 'Plugin for files with .hmpl extension for Vite',
  icon: '',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'hmpl',
    'hmpl-js',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hmpl-language/vite-plugin-hmpl',
    npm: 'https://www.npmjs.com/package/vite-plugin-hmpl',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
