import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@joylunow/rolldown-plugin-run',
  description: 'Rolldown plugin that runs your bundled server in watch mode, with zero-downtime restarts behind a TCP proxy',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'dev-server',
    'restart',
    'rolldown',
    'rolldown-plugin',
    'run',
    'watch',
    'zero-downtime',
  ],
  types: [
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/joyzyy/rolldown-plugin-run',
    npm: 'https://www.npmjs.com/package/@joylunow/rolldown-plugin-run',
  },
  stats: {
    downloads: {
      monthly: 290,
      weekly: 8,
    },
  },
})
