import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-empty-outdir',
  description: 'A plugin to empty output directory for all rolldown outputs.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'empty-outdir',
    'rolldown',
    'rolldown-plugin',
  ],
  source: {
    github: 'aprosail/rolldown-enhance',
    npm: 'rolldown-plugin-empty-outdir',
  },
  links: {
    github: 'https://github.com/aprosail/rolldown-enhance',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-empty-outdir',
    website: 'https://github.com/aprosail/rolldown-enhance#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
