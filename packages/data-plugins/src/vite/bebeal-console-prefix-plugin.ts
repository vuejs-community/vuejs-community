import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@bebeal/console-prefix-plugin',
  description: 'A Vite plugin that adds custom prefixes to console.log messages',
  version: '0.1.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'console',
    'log',
    'prefix',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bebeal/console-prefix-plugin',
    npm: 'https://www.npmjs.com/package/@bebeal/console-prefix-plugin',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 10,
    },
  },
})
