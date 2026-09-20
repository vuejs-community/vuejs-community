import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ayu-sh-kr/dota-event-map-generator',
  description: 'Vite plugin scaffold for generating typed ApplicationEventMap declaration files from Dota application sources.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'dota',
    'events',
    'application-event-map',
    'typescript',
  ],
  links: {
    github: 'https://github.com/ayu-sh-kr/dota-workspace',
    npm: 'https://www.npmjs.com/package/@ayu-sh-kr/dota-event-map-generator',
    website: 'https://github.com/ayu-sh-kr/dota-workspace#readme',
  },
  source: {
    github: 'ayu-sh-kr/dota-workspace',
    npm: '@ayu-sh-kr/dota-event-map-generator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 3,
    },
  },
})
