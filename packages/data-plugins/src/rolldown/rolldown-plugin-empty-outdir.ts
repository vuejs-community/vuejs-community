import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-empty-outdir',
  description: 'A plugin to empty output directory for all rolldown outputs.',
  icon: 'logos:rolldown-icon',
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
  source: {
    github: 'aprosail/rolldown-enhance',
    npm: 'rolldown-plugin-empty-outdir',
  },
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
