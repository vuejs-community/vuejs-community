import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vite-fullstack/plugin',
  description: '',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-fullstack',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/detarkende/vite-fullstack',
    npm: 'https://www.npmjs.com/package/@vite-fullstack/plugin',
  },
  source: {
    github: 'detarkende/vite-fullstack',
    npm: '@vite-fullstack/plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
