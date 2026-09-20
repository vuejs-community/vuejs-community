import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-serve-ipc',
  description: 'Serve Vite\'s development or preview server over IPC.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ipc',
    'unix-socket',
    'named-pipe',
  ],
  links: {
    github: 'https://github.com/HoldYourWaffle/vite-plugin-serve-ipc',
    npm: 'https://www.npmjs.com/package/vite-plugin-serve-ipc',
    website: 'https://github.com/HoldYourWaffle/vite-plugin-serve-ipc#readme',
  },
  source: {
    github: 'HoldYourWaffle/vite-plugin-serve-ipc',
    npm: 'vite-plugin-serve-ipc',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
