import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssh',
  description: 'A vite ssh deploy plugin',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ssh',
    'ssh2',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/drizzlesconsin/vite-plugin-ssh',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssh',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
