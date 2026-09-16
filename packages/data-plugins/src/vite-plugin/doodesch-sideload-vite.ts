import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@doodesch/sideload-vite',
  description: 'Build a Sideload app with Vite: React or plain TypeScript in, one bundle the engine reads out.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sideload',
    'schedule-i',
    'melonloader',
    'vite-plugin',
    'modding',
  ],
  source: {
    github: 'DooDesch-Mods/ScheduleOne-Sideload',
    npm: '@doodesch/sideload-vite',
  },
  links: {
    github: 'https://github.com/DooDesch-Mods/ScheduleOne-Sideload',
    npm: 'https://www.npmjs.com/package/@doodesch/sideload-vite',
    website: 'https://github.com/DooDesch-Mods/ScheduleOne-Sideload#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 60,
      weekly: 10,
    },
  },
})
