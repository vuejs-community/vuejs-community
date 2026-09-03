import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@browse-sent-event/plugin-vite',
  description: 'Vite plugin for injecting browse-sent-event into browser development entries.',
  version: '0.1.0-alpha.1',
  category: 'plugin',
  tags: [
    'devtools',
    'eventsource',
    'fetch',
    'realtime',
    'vite',
    'vite-plugin',
    'websocket',
    'xhr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/songforthemute/browse-sent-event',
    npm: 'https://www.npmjs.com/package/@browse-sent-event/plugin-vite',
  },
  stats: {
    downloads: {
      monthly: 207,
      weekly: 11,
    },
  },
})
