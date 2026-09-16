import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-refina',
  description: 'The vite plugin for Refina framework.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'refina',
    'vite-plugin',
  ],
  source: {
    github: 'KermanX/refina',
    npm: 'vite-plugin-refina',
  },
  links: {
    github: 'https://github.com/KermanX/refina',
    npm: 'https://www.npmjs.com/package/vite-plugin-refina',
    website: 'https://github.com/KermanX/refina#readme',
  },
  stats: {
    stars: 38,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
