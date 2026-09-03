import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@stareezy-ui/compiler',
  description: 'Stareezy UI compiler — Babel/Vite/Metro plugin for build-time token extraction and atomic CSS generation',
  version: '1.1.3',
  category: 'plugin',
  tags: [
    'stareezy-ui',
    'compiler',
    'babel-plugin',
    'vite-plugin',
    'atomic-css',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stareezy-1/stareezy-ui',
    npm: 'https://www.npmjs.com/package/@stareezy-ui/compiler',
  },
  stats: {
    downloads: {
      monthly: 92,
      weekly: 5,
    },
  },
})
