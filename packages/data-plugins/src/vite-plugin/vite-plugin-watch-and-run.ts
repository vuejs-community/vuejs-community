import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-and-run',
  description: 'vite-plugin that will watch some files and run a package.json script on change',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'jycouet/kitql',
    npm: 'vite-plugin-watch-and-run',
  },
  links: {
    github: 'https://github.com/jycouet/kitql',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-and-run',
    website: 'https://www.kitql.dev/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 65369,
      weekly: 11692,
    },
  },
})
