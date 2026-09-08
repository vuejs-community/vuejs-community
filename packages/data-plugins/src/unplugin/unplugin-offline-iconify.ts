import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-offline-iconify',
  description: 'Bundle only the Iconify icons used by your app, with sprite and Iconify runtime modes.',
  icon: 'icon:dark-unplugin',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'clddup/unplugin-iconfiy',
    npm: 'unplugin-offline-iconify',
  },
  links: {
    github: 'https://github.com/clddup/unplugin-iconfiy',
    npm: 'https://www.npmjs.com/package/unplugin-offline-iconify',
  },
  stats: {
    downloads: {
      monthly: 361,
      weekly: 86,
    },
  },
})
