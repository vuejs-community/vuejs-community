import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-file-list',
  description: 'Lists all file directories and files under the current project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'file list',
  ],
  source: {
    github: 'amazingdudu/vite-plugin-file-list',
    npm: 'vite-plugin-file-list',
  },
  links: {
    github: 'https://github.com/amazingdudu/vite-plugin-file-list',
    npm: 'https://www.npmjs.com/package/vite-plugin-file-list',
    website: 'https://github.com/amazingdudu/vite-plugin-file-list#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
