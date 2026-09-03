import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-command',
  description: 'Vite plugin to run custom commands on file changes',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/emargareten/vite-plugin-command',
    npm: 'https://www.npmjs.com/package/vite-plugin-command',
  },
  stats: {
    downloads: {
      monthly: 455,
      weekly: 116,
    },
  },
})
