import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-command',
  description: 'Vite plugin to run custom commands on file changes',
  icon: 'logos:vite-icon',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'emargareten/vite-plugin-command',
    npm: 'vite-plugin-command',
  },
  links: {
    github: 'https://github.com/emargareten/vite-plugin-command',
    npm: 'https://www.npmjs.com/package/vite-plugin-command',
  },
  stats: {
    downloads: {
      monthly: 391,
      weekly: 77,
    },
  },
})
