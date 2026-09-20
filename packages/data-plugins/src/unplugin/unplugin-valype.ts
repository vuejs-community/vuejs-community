import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-valype',
  description: '',
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
    'rolldown',
    'transform',
    'validator',
  ],
  links: {
    github: 'https://github.com/yuzheng14/valype',
    npm: 'https://www.npmjs.com/package/unplugin-valype',
    website: 'https://github.com/yuzheng14/valype/tree/main/packages/plugin#readme',
  },
  source: {
    github: 'yuzheng14/valype',
    npm: 'unplugin-valype',
  },
  stats: {
    stars: 70,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
