import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-info',
  description: 'Export build information as virutal module',
  icon: 'icon:dark-unplugin',
  version: '1.3.2',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  source: {
    github: 'yjl9903/unplugin-info',
    npm: 'unplugin-info',
  },
  links: {
    github: 'https://github.com/yjl9903/unplugin-info',
    npm: 'https://www.npmjs.com/package/unplugin-info',
  },
  stats: {
    downloads: {
      monthly: 57809,
      weekly: 12257,
    },
  },
})
