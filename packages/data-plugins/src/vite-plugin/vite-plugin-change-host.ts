import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-change-host',
  description: 'A vite plugin to change the local host to a custom host',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-change-host',
    'host',
    'localhost',
  ],
  links: {
    github: 'https://github.com/livemehere/vite-plugin-change-host',
    npm: 'https://www.npmjs.com/package/vite-plugin-change-host',
  },
  source: {
    github: 'livemehere/vite-plugin-change-host',
    npm: 'vite-plugin-change-host',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 35,
      weekly: 5,
    },
  },
})
