import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-tsconfig-paths',
  description: 'A plugin to resolves paths from tsconfig for Rolldown.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'aliases',
    'rolldown',
    'rolldown-plugin',
    'tsconfig',
    'tsconfig-paths',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/aprosail/rolldown-enhance',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-tsconfig-paths',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 11,
    },
  },
})
