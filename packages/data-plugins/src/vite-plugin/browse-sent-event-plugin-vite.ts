import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@browse-sent-event/plugin-vite',
  description: 'Vite plugin for injecting browse-sent-event into browser development entries.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/songforthemute/browse-sent-event',
    npm: 'https://www.npmjs.com/package/@browse-sent-event/plugin-vite',
    website: 'https://songforthemute.github.io/browse-sent-event/',
  },
  source: {
    github: 'songforthemute/browse-sent-event',
    npm: '@browse-sent-event/plugin-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 32,
      weekly: 5,
    },
  },
})
