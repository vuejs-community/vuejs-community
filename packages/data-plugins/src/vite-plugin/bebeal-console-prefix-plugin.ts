import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bebeal/console-prefix-plugin',
  description: 'A Vite plugin that adds custom prefixes to console.log messages',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'console',
    'log',
    'prefix',
    'debug',
  ],
  links: {
    github: 'https://github.com/bebeal/console-prefix-plugin',
    npm: 'https://www.npmjs.com/package/@bebeal/console-prefix-plugin',
    website: 'https://github.com/bebeal/console-prefix-plugin#readme',
  },
  source: {
    github: 'bebeal/console-prefix-plugin',
    npm: '@bebeal/console-prefix-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 32,
      weekly: 3,
    },
  },
})
