import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stripper',
  description: 'vite-plugin that will strip out some function of your browser bundle',
  version: '0.10.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jycouet/kitql',
    npm: 'https://www.npmjs.com/package/vite-plugin-stripper',
  },
  stats: {
    downloads: {
      monthly: 1023,
      weekly: 235,
    },
  },
})
