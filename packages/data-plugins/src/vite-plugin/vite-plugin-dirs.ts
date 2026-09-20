import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dirs',
  description: 'A vite plugin to get the names of all files in a specified directory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-dirs',
    'vite-plugin-directory',
    'vite-plugin-folders',
  ],
  links: {
    github: 'https://github.com/amihhs/vite-plugin-dirs',
    npm: 'https://www.npmjs.com/package/vite-plugin-dirs',
    website: 'https://github.com/amihhs/vite-plugin-dirs#readme',
  },
  source: {
    github: 'amihhs/vite-plugin-dirs',
    npm: 'vite-plugin-dirs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
