import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@woomai/unplugin-info',
  description: 'Export build information as virutal module',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unplugin',
    'build',
    'vite',
    'vite-plugin',
    'git',
    'CI',
  ],
  source: {
    github: 'yjl9903/unplugin-info',
    npm: '@woomai/unplugin-info',
  },
  links: {
    github: 'https://github.com/yjl9903/unplugin-info',
    npm: 'https://www.npmjs.com/package/@woomai/unplugin-info',
    website: 'https://github.com/yjl9903/unplugin-info#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
