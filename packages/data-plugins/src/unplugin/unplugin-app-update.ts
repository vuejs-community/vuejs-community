import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-app-update',
  description: 'App deployment user notification. Support webpack vite. Unrestricted framework, React, Vue, Angular can all be used',
  icon: 'icon:dark-unplugin',
  version: '1.3.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'plugin',
    'update',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'Vgbire/unplugin-app-update',
    npm: 'unplugin-app-update',
  },
  links: {
    github: 'https://github.com/Vgbire/unplugin-app-update',
    npm: 'https://www.npmjs.com/package/unplugin-app-update',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 10,
    },
  },
})
