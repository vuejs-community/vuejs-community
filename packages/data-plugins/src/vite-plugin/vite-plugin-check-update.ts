import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-check-update',
  description: 'A Vite plugin that monitors dist bundle updates at runtime and prompts users to refresh when new versions are deployed',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
  ],
  source: {
    npm: 'vite-plugin-check-update',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-check-update',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
