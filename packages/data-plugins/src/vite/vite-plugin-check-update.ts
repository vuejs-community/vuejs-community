import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-check-update',
  description: 'A Vite plugin that monitors dist bundle updates at runtime and prompts users to refresh when new versions are deployed',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-check-update',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
