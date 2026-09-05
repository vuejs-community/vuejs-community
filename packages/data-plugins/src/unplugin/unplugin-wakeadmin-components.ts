import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-wakeadmin-components',
  description: 'Wakeadmin components development plugin',
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
  links: {
    github: 'https://github.com/wakeadmin/components',
    npm: 'https://www.npmjs.com/package/unplugin-wakeadmin-components',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
