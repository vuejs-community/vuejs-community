import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-notifier',
  description: 'System notification of build results',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'build-notifier',
    'notifier',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'RuSenLi/unplugin-build-notifier',
    npm: 'unplugin-build-notifier',
  },
  links: {
    github: 'https://github.com/RuSenLi/unplugin-build-notifier',
    npm: 'https://www.npmjs.com/package/unplugin-build-notifier',
    website: 'https://github.com/RuSenLi/unplugin-build-notifier#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
