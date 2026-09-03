import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-empty-outdir',
  description: 'A plugin to empty output directory for all rolldown outputs.',
  version: '2.0.2',
  category: 'plugin',
  tags: [
    'empty-outdir',
    'rolldown',
    'rolldown-plugin',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/aprosail/rolldown-enhance',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-empty-outdir',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 6,
    },
  },
})
