import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssh',
  description: 'A vite ssh deploy plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ssh',
    'ssh2',
  ],
  source: {
    github: 'drizzlesconsin/vite-plugin-ssh',
    npm: 'vite-plugin-ssh',
  },
  links: {
    github: 'https://github.com/drizzlesconsin/vite-plugin-ssh',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssh',
    website: 'https://github.com/drizzlesconsin/vite-plugin-ssh#README',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
