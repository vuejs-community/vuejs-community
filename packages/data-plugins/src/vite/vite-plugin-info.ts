import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-info',
  description: 'Export build information as Vite virutal module',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'yjl9903/vite-plugin-info',
    npm: 'vite-plugin-info',
  },
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-info',
  },
  stats: {
    downloads: {
      monthly: 1552,
      weekly: 468,
    },
  },
})
