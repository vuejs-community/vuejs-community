import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@beekeeperstudio/vite-plugin',
  description: 'A Vite plugin for Beekeeper Studio plugin development that enables hot reloading',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'beekeeper-studio',
  ],
  links: {
    github: 'https://github.com/beekeeper-studio/vite-plugin',
    npm: 'https://www.npmjs.com/package/@beekeeperstudio/vite-plugin',
    website: 'https://github.com/beekeeper-studio/vite-plugin#readme',
  },
  source: {
    github: 'beekeeper-studio/vite-plugin',
    npm: '@beekeeperstudio/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 151,
      weekly: 29,
    },
  },
})
