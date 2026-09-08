import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-refina',
  description: 'The vite plugin for Refina framework.',
  icon: 'logos:vite-icon',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'refina',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'KermanX/refina',
    npm: 'vite-plugin-refina',
  },
  links: {
    github: 'https://github.com/KermanX/refina',
    npm: 'https://www.npmjs.com/package/vite-plugin-refina',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 9,
    },
  },
})
