import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-and-run',
  description: 'vite-plugin that will watch some files and run a package.json script on change',
  icon: 'logos:vite-icon',
  version: '1.8.2',
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
    npm: 'vite-plugin-watch-and-run',
  },
  links: {
    github: 'https://github.com/jycouet/kitql',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-and-run',
  },
  stats: {
    downloads: {
      monthly: 80023,
      weekly: 22002,
    },
  },
})
