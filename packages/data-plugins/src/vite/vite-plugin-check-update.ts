import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-check-update',
  description: 'A Vite plugin that monitors dist bundle updates at runtime and prompts users to refresh when new versions are deployed',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-check-update',
  },
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
