import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-change-host',
  description: 'A vite plugin to change the local host to a custom host',
  icon: 'logos:vite-icon',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-change-host',
    'host',
    'localhost',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'livemehere/vite-plugin-change-host',
    npm: 'vite-plugin-change-host',
  },
  links: {
    github: 'https://github.com/livemehere/vite-plugin-change-host',
    npm: 'https://www.npmjs.com/package/vite-plugin-change-host',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
