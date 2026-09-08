import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-notifier',
  description: 'System notification of build results',
  icon: 'icon:dark-unplugin',
  version: '0.1.5',
  category: 'plugin',
  tags: [
    'build-notifier',
    'notifier',
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
    github: 'RuSenLi/unplugin-build-notifier',
    npm: 'unplugin-build-notifier',
  },
  links: {
    github: 'https://github.com/RuSenLi/unplugin-build-notifier',
    npm: 'https://www.npmjs.com/package/unplugin-build-notifier',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
