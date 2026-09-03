import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-info',
  description: 'Export build information as Vite virutal module',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'CI',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-info',
  },
  stats: {
    downloads: {
      monthly: 1638,
      weekly: 415,
    },
  },
})
