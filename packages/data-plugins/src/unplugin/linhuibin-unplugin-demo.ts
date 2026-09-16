import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@linhuibin/unplugin-demo',
  description: 'unplugin-demo',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'demo',
  ],
  source: {
    github: 'linhuibin98/unplugin-demo',
    npm: '@linhuibin/unplugin-demo',
  },
  links: {
    github: 'https://github.com/linhuibin98/unplugin-demo',
    npm: 'https://www.npmjs.com/package/@linhuibin/unplugin-demo',
    website: 'https://github.com/linhuibin98/unplugin-demo',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
