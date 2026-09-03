import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-serve-ipc',
  description: 'Serve Vite\'s development or preview server over IPC.',
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
  links: {
    github: 'https://github.com/HoldYourWaffle/vite-plugin-serve-ipc',
    npm: 'https://www.npmjs.com/package/vite-plugin-serve-ipc',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 7,
    },
  },
})
