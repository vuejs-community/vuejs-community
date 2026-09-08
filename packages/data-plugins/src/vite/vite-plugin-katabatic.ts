import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-katabatic',
  description: 'vite plugin for [Katabatic](https://github.com/katabatic-js/katabatic)',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'katabatic',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'katabatic-js/vite-plugin-katabatic',
    npm: 'vite-plugin-katabatic',
  },
  links: {
    github: 'https://github.com/katabatic-js/vite-plugin-katabatic',
    npm: 'https://www.npmjs.com/package/vite-plugin-katabatic',
  },
  stats: {
    downloads: {
      monthly: 177,
      weekly: 2,
    },
  },
})
