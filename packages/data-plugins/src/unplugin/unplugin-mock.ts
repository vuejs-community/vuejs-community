import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-mock',
  description: 'keep polite by plugin',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'mock',
    'mock-server',
    'unplugin-mock',
  ],
  source: {
    github: 'tangdaoyuan/unplugin-mock',
    npm: 'unplugin-mock',
  },
  links: {
    github: 'https://github.com/tangdaoyuan/unplugin-mock',
    npm: 'https://www.npmjs.com/package/unplugin-mock',
    website: 'https://github.com/tangdaoyuan/unplugin-mock#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 42,
      weekly: 4,
    },
  },
})
