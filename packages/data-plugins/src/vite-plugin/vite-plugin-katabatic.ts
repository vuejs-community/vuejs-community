import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-katabatic',
  description: 'vite plugin for [Katabatic](https://github.com/katabatic-js/katabatic)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'katabatic',
    'vite-plugin',
  ],
  source: {
    github: 'katabatic-js/vite-plugin-katabatic',
    npm: 'vite-plugin-katabatic',
  },
  links: {
    github: 'https://github.com/katabatic-js/vite-plugin-katabatic',
    npm: 'https://www.npmjs.com/package/vite-plugin-katabatic',
    website: 'https://github.com/katabatic-js/vite-plugin-katabatic#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
