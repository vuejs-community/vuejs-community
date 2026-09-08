import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linaria',
  description: 'A plugin for vite to serve and build linaria using linaria babel',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'linaria',
    'css',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'denn1s/vite-plugin-linaria',
    npm: 'vite-plugin-linaria',
  },
  links: {
    github: 'https://github.com/denn1s/vite-plugin-linaria',
    npm: 'https://www.npmjs.com/package/vite-plugin-linaria',
  },
  stats: {
    downloads: {
      monthly: 701,
      weekly: 148,
    },
  },
})
