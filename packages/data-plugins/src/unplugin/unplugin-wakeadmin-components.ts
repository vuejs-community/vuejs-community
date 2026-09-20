import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-wakeadmin-components',
  description: 'Wakeadmin components development plugin',
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
    github: 'https://github.com/wakeadmin/components',
    npm: 'https://www.npmjs.com/package/unplugin-wakeadmin-components',
    website: 'https://github.com/wakeadmin/components#readme',
  },
  source: {
    github: 'wakeadmin/components',
    npm: 'unplugin-wakeadmin-components',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
