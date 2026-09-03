import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ayu-sh-kr/dota-event-map-generator',
  description: 'Vite plugin scaffold for generating typed ApplicationEventMap declaration files from Dota application sources.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'dota',
    'events',
    'application-event-map',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ayu-sh-kr/dota-workspace',
    npm: 'https://www.npmjs.com/package/@ayu-sh-kr/dota-event-map-generator',
  },
  stats: {
    downloads: {
      monthly: 233,
      weekly: 8,
    },
  },
})
