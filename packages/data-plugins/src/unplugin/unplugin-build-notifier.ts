import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'unplugin-build-notifier',
  description: 'System notification of build results',
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
