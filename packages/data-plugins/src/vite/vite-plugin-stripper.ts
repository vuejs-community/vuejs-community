import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stripper',
  description: 'vite-plugin that will strip out some function of your browser bundle',
  icon: 'logos:vite-icon',
  version: '0.10.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'jycouet/kitql',
    npm: 'vite-plugin-stripper',
  },
  links: {
    github: 'https://github.com/jycouet/kitql',
    npm: 'https://www.npmjs.com/package/vite-plugin-stripper',
  },
  stats: {
    downloads: {
      monthly: 950,
      weekly: 226,
    },
  },
})
