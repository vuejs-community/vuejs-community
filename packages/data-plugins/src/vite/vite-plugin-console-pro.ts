import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-pro',
  description: 'Adds a timestamp and an active link to the \'console.log\' output to open the source file in Visual Code.',
  version: '0.6.6',
  category: 'plugin',
  tags: [
    'log',
    'vite',
    'console',
    'console.log',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jacoby3210/vite-plugin-console-pro',
    npm: 'https://www.npmjs.com/package/vite-plugin-console-pro',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
