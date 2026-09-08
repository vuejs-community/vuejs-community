import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-serve-ipc',
  description: 'Serve Vite\'s development or preview server over IPC.',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ipc',
    'unix-socket',
    'named-pipe',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'HoldYourWaffle/vite-plugin-serve-ipc',
    npm: 'vite-plugin-serve-ipc',
  },
  links: {
    github: 'https://github.com/HoldYourWaffle/vite-plugin-serve-ipc',
    npm: 'https://www.npmjs.com/package/vite-plugin-serve-ipc',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
