import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stareezy-ui/compiler',
  description: 'Stareezy UI compiler — Babel/Vite/Metro plugin for build-time token extraction and atomic CSS generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'stareezy-ui',
    'compiler',
    'babel-plugin',
    'vite-plugin',
    'atomic-css',
  ],
  links: {
    github: 'https://github.com/stareezy-1/stareezy-ui',
    npm: 'https://www.npmjs.com/package/@stareezy-ui/compiler',
    website: 'https://github.com/stareezy-1/stareezy-ui#readme',
  },
  source: {
    github: 'stareezy-1/stareezy-ui',
    npm: '@stareezy-ui/compiler',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 47,
      weekly: 15,
    },
  },
})
