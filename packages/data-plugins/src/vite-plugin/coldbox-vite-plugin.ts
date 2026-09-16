import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'coldbox-vite-plugin',
  description: 'ColdBox plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'coldbox',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'ColdBox/coldbox-vite-plugin',
    npm: 'coldbox-vite-plugin',
  },
  links: {
    github: 'https://github.com/ColdBox/coldbox-vite-plugin',
    npm: 'https://www.npmjs.com/package/coldbox-vite-plugin',
    website: 'https://github.com/ColdBox/coldbox-vite-plugin',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 66,
      weekly: 12,
    },
  },
})
