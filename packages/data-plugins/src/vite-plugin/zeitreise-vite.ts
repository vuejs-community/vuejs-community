import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zeitreise/vite',
  description: 'Zeitreise',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'antfu/zeitreise',
    npm: '@zeitreise/vite',
  },
  links: {
    github: 'https://github.com/antfu/zeitreise',
    npm: 'https://www.npmjs.com/package/@zeitreise/vite',
    website: 'https://github.com/antfu/zeitreise#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
