import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oveo/rolldown',
  description: 'Rolldown plugin for oveo optimizer',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown-plugin',
  ],
  source: {
    github: 'localvoid/oveo',
    npm: '@oveo/rolldown',
  },
  links: {
    github: 'https://github.com/localvoid/oveo',
    npm: 'https://www.npmjs.com/package/@oveo/rolldown',
    website: 'https://github.com/localvoid/oveo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
