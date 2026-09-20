import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uni-ku/unplugin-keep-comments',
  description: '💬 在构建产物中保留指定的注释',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'rolldown',
    'rollup',
  ],
  links: {
    github: 'https://github.com/uni-ku/unplugin-keep-comments',
    npm: 'https://www.npmjs.com/package/@uni-ku/unplugin-keep-comments',
    website: 'https://github.com/uni-ku/unplugin-keep-comments#readme',
  },
  source: {
    github: 'uni-ku/unplugin-keep-comments',
    npm: '@uni-ku/unplugin-keep-comments',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 63,
      weekly: 15,
    },
  },
})
