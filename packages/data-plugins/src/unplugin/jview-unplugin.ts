import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jview/unplugin',
  description: 'unplugin for jview-ui',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
  ],
  source: {
    github: 'jview-design/jview',
    npm: '@jview/unplugin',
  },
  links: {
    github: 'https://github.com/jview-design/jview',
    npm: 'https://www.npmjs.com/package/@jview/unplugin',
    website: 'https://github.com/jview-design/jview#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 52,
      weekly: 2,
    },
  },
})
