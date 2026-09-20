import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rolldown/plugin-babel',
  description: 'Rolldown plugin for Babel',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'babel',
    'plugin',
    'rolldown',
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/rolldown/plugins',
    npm: 'https://www.npmjs.com/package/@rolldown/plugin-babel',
    website: 'https://github.com/rolldown/plugins/tree/main/packages/babel#readme',
  },
  source: {
    github: 'rolldown/plugins',
    npm: '@rolldown/plugin-babel',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 13279388,
      weekly: 3027224,
    },
  },
})
