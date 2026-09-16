import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@joylunow/rolldown-plugin-run',
  description: 'Rolldown plugin that runs your bundled server in watch mode, with zero-downtime restarts behind a TCP proxy',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'dev-server',
    'restart',
    'rolldown',
    'rolldown-plugin',
    'run',
    'watch',
    'zero-downtime',
  ],
  source: {
    github: 'joyzyy/rolldown-plugin-run',
    npm: '@joylunow/rolldown-plugin-run',
  },
  links: {
    github: 'https://github.com/joyzyy/rolldown-plugin-run',
    npm: 'https://www.npmjs.com/package/@joylunow/rolldown-plugin-run',
    website: 'https://github.com/joyzyy/rolldown-plugin-run#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
