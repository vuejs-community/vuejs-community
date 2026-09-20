import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-tsconfig-paths',
  description: 'A plugin to resolves paths from tsconfig for Rolldown.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'aliases',
    'rolldown',
    'rolldown-plugin',
    'tsconfig',
    'tsconfig-paths',
  ],
  links: {
    github: 'https://github.com/aprosail/rolldown-enhance',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-tsconfig-paths',
    website: 'https://github.com/aprosail/rolldown-enhance#readme',
  },
  source: {
    github: 'aprosail/rolldown-enhance',
    npm: 'rolldown-plugin-tsconfig-paths',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 4,
    },
  },
})
