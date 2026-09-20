import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-console-pro',
  description: 'Adds a timestamp and an active link to the \'console.log\' output to open the source file in Visual Code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'log',
    'vite',
    'console',
    'console.log',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jacoby3210/vite-plugin-console-pro',
    npm: 'https://www.npmjs.com/package/vite-plugin-console-pro',
    website: 'https://github.com/jacoby3210/vite-plugin-console-pro#readme',
  },
  source: {
    github: 'jacoby3210/vite-plugin-console-pro',
    npm: 'vite-plugin-console-pro',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
