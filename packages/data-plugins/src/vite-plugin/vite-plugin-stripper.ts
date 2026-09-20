import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stripper',
  description: 'vite-plugin that will strip out some function of your browser bundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jycouet/kitql',
    npm: 'https://www.npmjs.com/package/vite-plugin-stripper',
    website: 'https://www.kitql.dev/',
  },
  source: {
    github: 'jycouet/kitql',
    npm: 'vite-plugin-stripper',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 731,
      weekly: 106,
    },
  },
})
