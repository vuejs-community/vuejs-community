import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-command',
  description: 'Vite plugin to run custom commands on file changes',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'emargareten/vite-plugin-command',
    npm: 'vite-plugin-command',
  },
  links: {
    github: 'https://github.com/emargareten/vite-plugin-command',
    npm: 'https://www.npmjs.com/package/vite-plugin-command',
    website: 'https://github.com/emargareten/vite-plugin-command#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 382,
      weekly: 49,
    },
  },
})
