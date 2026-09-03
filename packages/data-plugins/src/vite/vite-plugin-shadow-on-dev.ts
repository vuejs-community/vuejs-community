import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadow-on-dev',
  description: 'Vite plugin that syncs a folder with another folder in your output dir',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'public',
    'folder',
    'refresh',
    'copy',
    'synchronize',
    'sync',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/apppro123/vite-plugin-shadow-on-dev',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadow-on-dev',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 6,
    },
  },
})
