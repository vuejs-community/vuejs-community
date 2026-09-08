import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-wakeadmin-components',
  description: 'Wakeadmin components development plugin',
  icon: 'icon:dark-unplugin',
  version: '0.1.2',
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
    github: 'wakeadmin/components',
    npm: 'unplugin-wakeadmin-components',
  },
  links: {
    github: 'https://github.com/wakeadmin/components',
    npm: 'https://www.npmjs.com/package/unplugin-wakeadmin-components',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 0,
    },
  },
})
