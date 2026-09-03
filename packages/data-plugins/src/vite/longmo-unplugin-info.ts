import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'longmo-unplugin-info',
  description: 'Export build information as virutal module',
  version: '1.0.2',
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
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yjl9903/unplugin-info',
    npm: 'https://www.npmjs.com/package/longmo-unplugin-info',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
