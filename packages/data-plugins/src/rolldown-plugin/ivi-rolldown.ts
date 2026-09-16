import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ivi/rolldown',
  description: 'Rolldown plugin for ivi library.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'ivi',
    'rolldown-plugin',
  ],
  source: {
    github: 'localvoid/ivi',
    npm: '@ivi/rolldown',
  },
  links: {
    github: 'https://github.com/localvoid/ivi',
    npm: 'https://www.npmjs.com/package/@ivi/rolldown',
    website: 'https://github.com/localvoid/ivi',
  },
  stats: {
    stars: 802,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
