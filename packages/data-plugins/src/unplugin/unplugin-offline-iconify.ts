import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-offline-iconify',
  description: 'Bundle only the Iconify icons used by your app, with sprite and Iconify runtime modes.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    github: 'https://github.com/clddup/unplugin-iconfiy',
    npm: 'https://www.npmjs.com/package/unplugin-offline-iconify',
    website: 'https://github.com/clddup/unplugin-iconfiy#readme',
  },
  source: {
    github: 'clddup/unplugin-iconfiy',
    npm: 'unplugin-offline-iconify',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 202,
      weekly: 6,
    },
  },
})
