import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'refiber-vite-plugin',
  description: 'Refiber plugin for vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'refiber',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/refiber/vite-plugin',
    npm: 'https://www.npmjs.com/package/refiber-vite-plugin',
    website: 'https://github.com/refiber/vite-plugin#readme',
  },
  source: {
    github: 'refiber/vite-plugin',
    npm: 'refiber-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
