import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@beekeeperstudio/vite-plugin',
  description: 'A Vite plugin for Beekeeper Studio plugin development that enables hot reloading',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'beekeeper-studio',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/beekeeper-studio/vite-plugin',
    npm: 'https://www.npmjs.com/package/@beekeeperstudio/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 134,
      weekly: 29,
    },
  },
})
