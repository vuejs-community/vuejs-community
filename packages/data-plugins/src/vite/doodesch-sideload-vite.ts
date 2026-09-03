import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@doodesch/sideload-vite',
  description: 'Build a Sideload app with Vite: React or plain TypeScript in, one bundle the engine reads out.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'sideload',
    'schedule-i',
    'melonloader',
    'vite-plugin',
    'modding',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DooDesch-Mods/ScheduleOne-Sideload',
    npm: 'https://www.npmjs.com/package/@doodesch/sideload-vite',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 9,
    },
  },
})
