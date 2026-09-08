import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-prettier',
  description: 'Rolldown plugin for code formatting using Prettier',
  icon: 'logos:rolldown-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rolldown',
    'rolldown-plugin',
    'plugin',
    'prettier',
  ],
  types: [
    'rolldown-plugin',
  ],
  source: {
    github: 'samualtnorman/rolldown-plugin-prettier',
    npm: 'rolldown-plugin-prettier',
  },
  links: {
    github: 'https://github.com/samualtnorman/rolldown-plugin-prettier',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-prettier',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 3,
    },
  },
})
