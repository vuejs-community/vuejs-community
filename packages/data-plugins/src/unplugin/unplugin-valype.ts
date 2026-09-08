import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-valype',
  description: '',
  icon: 'icon:dark-unplugin',
  version: '0.1.0-beta.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'rolldown',
    'transform',
    'validator',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'yuzheng14/valype',
    npm: 'unplugin-valype',
  },
  links: {
    github: 'https://github.com/yuzheng14/valype',
    npm: 'https://www.npmjs.com/package/unplugin-valype',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
