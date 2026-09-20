import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-info',
  description: 'Export build information as Vite virutal module',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'git',
    'CI',
  ],
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-info',
    website: 'https://github.com/yjl9903/vite-plugin-info#readme',
  },
  source: {
    github: 'yjl9903/vite-plugin-info',
    npm: 'vite-plugin-info',
  },
  stats: {
    stars: 112,
    downloads: {
      monthly: 1651,
      weekly: 327,
    },
  },
})
