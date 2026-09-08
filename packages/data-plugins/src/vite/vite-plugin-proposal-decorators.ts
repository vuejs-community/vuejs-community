import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proposal-decorators',
  description: 'A Vite plugin for @babel/plugin-proposal-decorators',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    '@babel/plugin-proposal-decorators',
    'vite',
    'vite-plugin',
    'decorators',
    'proposal-decorators',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cx690/vite-plugin-proposal-decorators',
    npm: 'vite-plugin-proposal-decorators',
  },
  links: {
    github: 'https://github.com/cx690/vite-plugin-proposal-decorators',
    npm: 'https://www.npmjs.com/package/vite-plugin-proposal-decorators',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
