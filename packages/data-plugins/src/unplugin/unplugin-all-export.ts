import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-all-export',
  description: 'automatically export folders',
  icon: 'icon:dark-unplugin',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zihan7777/unplugin-all-export',
    npm: 'unplugin-all-export',
  },
  links: {
    github: 'https://github.com/zihan7777/unplugin-all-export',
    npm: 'https://www.npmjs.com/package/unplugin-all-export',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 2,
    },
  },
})
