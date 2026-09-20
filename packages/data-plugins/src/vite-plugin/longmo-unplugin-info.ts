import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'longmo-unplugin-info',
  description: 'Export build information as virutal module',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'debug',
    'config',
    'unplugin',
    'build',
    'vite',
    'vite-plugin',
    'webpack',
    'rspack',
    'git',
    'CI',
  ],
  links: {
    github: 'https://github.com/yjl9903/unplugin-info',
    npm: 'https://www.npmjs.com/package/longmo-unplugin-info',
    website: 'https://yjl9903.github.io/unplugin-info/',
  },
  source: {
    github: 'yjl9903/unplugin-info',
    npm: 'longmo-unplugin-info',
  },
  stats: {
    stars: 112,
    downloads: {
      monthly: 23,
      weekly: 5,
    },
  },
})
